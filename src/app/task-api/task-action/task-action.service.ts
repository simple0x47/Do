import { Injectable } from '@angular/core';
import { TaskApiModule } from '../task-api.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActionType, TaskAction } from '../../task-action';
import { AuthService } from '@auth0/auth0-angular';
import { first } from 'rxjs';
import { TranslationMetadata } from 'src/app/translation-api/translation-metadata';

@Injectable({
  providedIn: TaskApiModule
})
export class TaskActionService {
  private accessToken: string = "";

  /**
   * In memory storage of the registered actions, used for sending many actions per request, reducing therefore
   * the overall amount of POST requests.
   */
  private registeredActionsCache: TaskAction[];

  constructor(private client: HttpClient, private auth: AuthService) {
    this.auth.getAccessTokenSilently({
      authorizationParams: {
        audience: environment.auth0.audience
      }
    }).pipe(first()).subscribe(token => {
      this.accessToken = token;
    });

    this.registeredActionsCache = [];

    // Send actions every x amount of seconds in order to assure the latest state is
    // updated even when we could not reach the actions per request limit.
    setTimeout(() => this.sendActions(), environment.task_api.send_action_after_seconds * 1000);
  }

  public registerCreate(createdTaskId: string) {
    const action = new TaskAction(ActionType.CREATE, JSON.stringify({ taskId: createdTaskId }));
    this.registerAction(action);
  }

  public registerToggleStatus(taskId: string) {
    const action = new TaskAction(ActionType.TOGGLE_STATUS, JSON.stringify({ taskId: taskId }));
    this.registerAction(action);
  }

  public registerUpdateDescription(taskId: string, newDescription: string) {
    const action = new TaskAction(ActionType.UPDATE_DESCRIPTION, JSON.stringify({ taskId: taskId, taskDescription: newDescription }))
    this.registerAction(action);
  }

  public registerClearDone() {
    const action = new TaskAction(ActionType.CLEAR_DONE, "")
    this.registerAction(action);
  }

  public registerTranslate(taskId: string, metadata: TranslationMetadata) {
    const action = new TaskAction(ActionType.TRANSLATE, JSON.stringify({ taskId: taskId, metadata }));
    this.registerAction(action);
  }

  private registerAction(action: TaskAction) {
    // Ignore action if user is not authenticated.
    if (this.accessToken.length === 0) {
      return;
    }

    this.registeredActionsCache.push(action);

    if (environment.task_api.actions_per_request <= this.registeredActionsCache.length) {
      this.sendActions();
    }
  }

  private sendActions() {
    // Avoid sending empty requests.
    if (this.registeredActionsCache.length === 0) {
      return;
    }

    this.client.post(
      `${environment.task_api.url}/register_action`,
      JSON.stringify(this.registeredActionsCache),
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        }
      }
    ).pipe(first()).subscribe();

    // Reset cache.
    this.registeredActionsCache.length = 0;
  }
}

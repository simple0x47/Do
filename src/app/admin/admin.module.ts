import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { USER_FEATURE_KEY, userReducer } from './user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { StoreModule } from '@ngrx/store';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthApiModule } from '../auth-api/auth-api.module';
import { AdminApiModule } from '../admin-api/admin-api.module';
import { CanActivateAdmin } from './route-guard';
import { MatCardModule } from '@angular/material/card';
import { UserViewDialogComponent } from './user-view-dialog/user-view-dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserActionsViewComponent } from './user-actions-view/user-actions-view.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    UserListComponent,
    UserViewDialogComponent,
    UserActionsViewComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    StoreModule.forFeature(USER_FEATURE_KEY, userReducer),
    EffectsModule.forFeature(UserEffects),
    AdminApiModule,
    AuthApiModule
  ],
  providers: [
    CanActivateAdmin
  ]
})
export class AdminModule { }

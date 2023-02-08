import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './task/tasks/tasks.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { CanActivateAdmin } from './admin/route-guard';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'admin', component: UserListComponent, canActivate: [CanActivateAdmin] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

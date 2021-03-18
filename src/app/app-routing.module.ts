import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  { path: 'tasks', component: TaskComponent },
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
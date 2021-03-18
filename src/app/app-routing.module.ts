import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { TaskComponent } from './task/task.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';


const routes: Routes = [
  { path: 'tasks', component: TaskComponent },
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  // newly added
  {path: 'taskdetails', component: TaskdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
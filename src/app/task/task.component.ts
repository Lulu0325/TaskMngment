import { Component, OnInit } from '@angular/core';  
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { TaskService } from '../task.service';  
import { Task } from '../task';  
  
@Component({  
  selector: 'app-task',  
  templateUrl: './task.component.html',  
  styleUrls: ['./task.component.css']  
})  
export class TaskComponent implements OnInit {  
  dataSaved = false;  
  taskForm: any;  
  allTasks: Observable<Task[]>;  
  taskIdUpdate = null;  
  massage = null;  
  
  constructor(private formbulider: FormBuilder, private taskService:TaskService) { }  
  
  ngOnInit() {  
    this.taskForm = this.formbulider.group({  
      QuoteType: ['', [Validators.required]],  
      DueDate: ['', [Validators.required]],  
      QuoteNumber: ['', [Validators.required]],  
      Contact: ['', [Validators.required]],  
      TaskContent: ['', [Validators.required]],  
    });  
    this.loadAllTasks();  
  }  

  loadAllTasks() {  
   /* this.taskService.getAllTask().subscribe(
      (data: any) => {
        this.allTasks = data;
  
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("I'm finished");
      }
    ); */
    this.allTasks = this.taskService.getAllTask();  
    debugger
  }  

  onFormSubmit() {  
    this.dataSaved = false;  
    const task = this.taskForm.value;  
    this.CreateTask(task);  
    this.taskForm.reset();  
  }  

  loadTaskToEdit(taskId: string) {  
    this.taskService.getTaskById(taskId).subscribe(task=> {  
      this.massage = null;  
      this.dataSaved = false;  
      this.taskIdUpdate = task.TaskId;  
      this.taskForm.controls['QuoteType'].setValue(task.QuoteType);  
     this.taskForm.controls['DueDate'].setValue(task.DueDate);  
      this.taskForm.controls['QuoteNumber'].setValue(task.QuoteNumber);  
      this.taskForm.controls['Contact'].setValue(task.Contact);  
      this.taskForm.controls['TaskContent'].setValue(task.TaskContent);  
    });  
  
  }  
  CreateTask(task: Task) {  
    if (this.taskIdUpdate == null) {  
      this.taskService.createTask(task).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.loadAllTasks();  
          this.taskIdUpdate = null;  
          this.taskForm.reset();  
        }  
      );  
    } else {  
      task.TaskId = this.taskIdUpdate;  
      this.taskService.updateTask(task).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Updated Successfully';  
        this.loadAllTasks();  
        this.taskIdUpdate = null;  
        this.taskForm.reset();  
      });  
    }  
  }   
  deleteTask(taskId: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.taskService.deleteTaskById(taskId).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Deleted Succefully';  
      this.loadAllTasks();  
      this.taskIdUpdate = null;  
      this.taskForm.reset();  
  
    });  
  }  
}  
  resetForm() {  
    this.taskForm.reset();  
    this.massage = null;  
    this.dataSaved = false;  
  }  
}  
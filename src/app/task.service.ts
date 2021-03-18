import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})


export class TaskService {

   url = 'http://localhost:44304/Api/Task';  
  constructor(private http: HttpClient) { }  
  getAllTask(): Observable<Task[]> {  
    return this.http.get<Task[]>(this.url + '/AllTasks/');  
  }  
  getTaskById(taskId: string): Observable<Task> {  
    return this.http.get<Task>(this.url + '/GetTasksById/' + taskId);  
  }  
  createTask(task: Task): Observable<Task> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Task>(this.url + '/InsertTasks/',  
    task, httpOptions);  
  }  
  updateTask(task: Task): Observable<Task> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Task>(this.url + '/UpdateTasks/',  
    task, httpOptions);  
  }  
  deleteTaskById(taskid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteTasks?id=' + taskid,  
 httpOptions);  
  }   

}  


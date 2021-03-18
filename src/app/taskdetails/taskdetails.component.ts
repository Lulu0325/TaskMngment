import { Component, OnInit } from '@angular/core';
import  { Tasklists } from '../tasklists';
 import { TASKLISTS } from '../mock-tasklists';


@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {


 //  tasklists = TASKLISTS;
 tasklists = TASKLISTS;

//newly added

  // newly added
  selectedTasklist?: Tasklists;
  onSelect(tasklist: Tasklists): void {
    this.selectedTasklist = tasklist;
  }

  

  constructor() { }

  ngOnInit(): void {
  
  }

}

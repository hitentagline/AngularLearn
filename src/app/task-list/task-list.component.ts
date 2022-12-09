import { Component, OnInit , Input, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() {
    console.log('Constructor task')
   }

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() siblings: [];

  ngOnInit(): void {
    console.log("NgOnInit");
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('AfterVieinit')
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    alert('Destroy');
  }
}

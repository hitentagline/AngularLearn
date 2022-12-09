import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task, Category } from './shared/Interfaces/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string        = 'Angular Learning';
  description:string  = 'Below List is about to learn today: ';
  myInput:string      = '';
  feedback:string     = '';

  isRed:boolean = true;
  
  tasks:Task[]= tasks;
  categories: Category[] = [
    {
      category_id:1,
      category_name:"Mobile",
    },
    {
      category_id:2,
      category_name:"laptop",
    },
  ]
  cities = [
    {
      name:'Surat',
      id:1
    },
    {
      name:'Ahmedabad',
      id:2
    },
    {
      name:'Baroda',
      id:3
    }
  ];
  selectedCity!:string;

  // onClick(event:any):void{
  //   console.log(this.myInput);
  // }

  constructor(){
    console.log('Constructor initialized')
  }

  // checkTitle(event:any):void{
  //   alert("Yes Its: "+this.title)
  // }

  // citySelected(event:any){
  //   console.log(event.target.value)
  //   this.selectedCity = event.target.value; 
  // }

  // firstName:string;
  // lastName:string;
  // siblings:Array<string>

  // count:string;
 

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.firstName = "Hiten";
  //   this.lastName = "Prajapati";
  //   this.count = "100";
  // }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   console.error("ngonchanged",changes)
    
  // }

  // ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   console.log("do check here!!");
    
  // }

  // dataChanged(data:Category){
  //   console.error(data)
  // }

  // ngAfterContentInit(): void {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  //   console.log("ng After Content Init");
    
  // }

  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   console.log("ng After view init");
    
  // }

  // ngAfterContentChecked(): void {
  //   //Called after every check of the component's or directive's content.
  //   //Add 'implements AfterContentChecked' to the class.
  //   console.log("ng After Content Checked");
    
  // }
  
  // ngAfterViewChecked(): void {
  //   //Called after every check of the component's view. Applies to components only.
  //   //Add 'implements AfterViewChecked' to the class.
  //   console.log("ng after view checked");
    
  // }
}


export const tasks= [
  {
    taskname:"Installation and setup Angular Project",
    description:"Learning Data Binding",
  },
  {
    taskname:"One way Data Binding",
    description:"Learning Data Binding",
  },
  {
    taskname:"Two way Data Binding",
    description:"Learning Data Binding",
  },
  {
    taskname:"Two way Data Binding",
    description:"Learning Data Binding",
  },
];

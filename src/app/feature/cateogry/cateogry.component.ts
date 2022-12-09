import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/Interfaces/common';

@Component({
  selector: 'app-cateogry',
  templateUrl: './cateogry.component.html',
  styleUrls: ['./cateogry.component.css']
})
export class CateogryComponent implements OnInit {

  @Input() cats : Category[]=[]
  @Output() changed : EventEmitter<Category> = new EventEmitter<Category>();
  constructor() { }

  ngOnInit(): void {
  }

  save(category:Category){
    console.log('saving');
    this.changed.emit(category);
  }
}

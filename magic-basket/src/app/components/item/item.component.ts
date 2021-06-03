import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, ItemType } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item:Item={name:"",type:ItemType.Fruit,id:0};
  @Output() deleteEmitter=new EventEmitter<Item>();
  constructor() { }

  ngOnInit(): void {
  }
  remove(){
    this.deleteEmitter.emit(this.item);
  }
}

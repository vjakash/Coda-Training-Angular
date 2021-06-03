import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemName:string="";
  @Input() itemType:string="";
  @Input() index:number=-1;

  @Output() deleteEmitter=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  remove(index:number){
    this.deleteEmitter.emit(index);
  }
}

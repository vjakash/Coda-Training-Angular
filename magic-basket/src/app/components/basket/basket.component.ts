import { Component, OnInit } from '@angular/core';
import { Item, ItemType } from 'src/app/constants/app.constants';
import { ServService } from 'src/app/serv.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  newItem:string="";
  fruits=['apple','orange','grapes','mango','kiwi','watermelon'];
  vegetables=['tomato','potato','carrot','onion','raddish'];
  basket:Array<Item>=[];
  error="";
  constructor(private serv:ServService) { }
  addItem(){
    let flag=true;
    if(this.newItem!==""){
      this.error="";
      this.basket.forEach(each=>{
        if(each.name==this.newItem){
          flag=false;
        }
      });
      if(flag){
        if(this.fruits.indexOf(this.newItem)>-1){
          this.basket.push({name:this.newItem,type:ItemType.Fruit,id:this.basket.length});
          this.serv.changeCount(this.basket.length);
        } 
        else if(this.vegetables.indexOf(this.newItem)>-1){
          this.basket.push({name:this.newItem,type:ItemType.Vegetable,id:this.basket.length});
          this.serv.changeCount(this.basket.length);
        } 
        else this.error="Enter valid item";
      }
      this.newItem="";
    }
  }
  checkKey(event:any){
    var code = event.keyCode;
    if(code == 13) {
        this.addItem();
    }
  }
  removeItem(item:Item){
    this.basket.splice(this.basket.indexOf(item),1);
    this.serv.changeCount(this.basket.length);
  }

  ngOnInit(): void {
  }

}

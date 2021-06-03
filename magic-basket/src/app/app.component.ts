import { Component } from '@angular/core';
import { Item, ItemType } from './constants/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magic-basket';
  newItem:string="";
  fruits=['apple','orange','grapes','mango','kiwi','watermelon'];
  vegetables=['tomato','potato','carrot','onion','raddish'];
  basket:Array<Item>=[];
  error="";
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
        if(this.fruits.indexOf(this.newItem)>-1) this.basket.push({name:this.newItem,type:ItemType.Fruit,id:this.basket.length});
        else if(this.vegetables.indexOf(this.newItem)>-1) this.basket.push({name:this.newItem,type:ItemType.Vegetable,id:this.basket.length});
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
  removeItem(index: number){
    this.basket.splice(index,1);
  }
}

import { Component } from '@angular/core';

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
  basket:Array<string[]>=[["apple","fruit"],["tomato","vegetable"],["phone","others"]];
  addItem(){
    let flag=true;
    if(this.newItem!==""){
      this.basket.forEach(each=>{
        if(each[0]==this.newItem){
          flag=false;
        }
      });
      if(flag){
        if(this.fruits.indexOf(this.newItem)>-1) this.basket.push([this.newItem,"fruit"]);
        else if(this.vegetables.indexOf(this.newItem)>-1) this.basket.push([this.newItem,"vegetable"]);
        else this.basket.push([this.newItem,"others"]);
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

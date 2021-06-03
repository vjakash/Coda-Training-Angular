import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor() { }
  total=0;
  private bSubject=new BehaviorSubject<number>(0);
  bSubjectMessage=this.bSubject.asObservable();

  changeCount(count:number){
    this.bSubject.next(count);
  }
}

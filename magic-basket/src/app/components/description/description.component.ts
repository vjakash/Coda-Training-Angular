import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/serv.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  total:number;
  constructor(private serv:ServService) { }

  ngOnInit(): void {
    this.serv.bSubjectMessage.subscribe(count=>this.total=count);
  }

}

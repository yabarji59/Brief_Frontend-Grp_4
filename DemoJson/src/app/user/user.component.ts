import { Component, OnInit } from '@angular/core';
import sampleData from './data.json';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Users:any = sampleData; 
  constructor() { }

  ngOnInit(): void {
   
  }

}

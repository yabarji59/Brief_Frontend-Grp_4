import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;      // récupération de l'utilisateur du parent // 
  constructor() { }

  ngOnInit(): void {
  }

}


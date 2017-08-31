import { Component, OnInit } from '@angular/core';

import { Utilisateur } from '../../entities/utilisateur';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {

  login:String ="";
  password:String="";

  constructor() { }

  ngOnInit() {
  }

}

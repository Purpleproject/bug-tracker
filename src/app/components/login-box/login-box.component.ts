import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ LoginService } from '../../services/login.service';

import { User } from '../../entities/user';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {

  
  user:User=new User();


  constructor(
 
    private router:Router,
    private loginService :LoginService,
  
) { }

  ngOnInit() {
    this.loginService.logout();
  }
  login() {
   
    this.loginService.login(this.user)
        .subscribe(
            user => {
              this.user = user;
              if (user.id > 0)
              {
                  console.log("login OK !");
                  console.log(user);
                  //this.router.navigate([this.returnUrl]);
                  if(this.user.role=="testeur"){
                    this.router.navigate(['/pageTesteur']);
                  }
                  else if (this.user.role=="editeur") {
                    
                    this.router.navigate(['/pageEditeur']);
                  }
              }
              else
              {
                console.log("echec login :/");
              }
            })
}

}

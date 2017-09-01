import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route:ActivatedRoute,
    private router:Router,
    private loginService :LoginService,
  
) { }

  ngOnInit() {
    this.loginService.logout();
  }
  login() {
   
    this.loginService.login(this.user.mail, this.user.mdp)
        .subscribe(
            data => {
                //this.router.navigate([this.returnUrl]);
                if(this.user.role=="testeur"){
                  this.router.navigate(['/pageTesteur']);
                }
                else if (this.user.role=="editeur") {
                  
                  this.router.navigate(['/pageEditeur']);
                } else {
                  return null;
                  
                }
            })
}

}

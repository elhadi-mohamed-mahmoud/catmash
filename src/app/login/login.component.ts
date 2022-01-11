import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userNotFound: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }
  onClickSubmit(data: any) {
    let user = new User(data.username, data.password);
    // start authentification
    this.userService.loginUser(user).subscribe(
      (res) => {
        localStorage.setItem('token', res.jwt);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.userNotFound = true;
      }
    );
  }
}

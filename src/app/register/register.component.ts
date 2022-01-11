import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  passwordsNotSame: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['home']);
    }
  }

  onClickSubmit(data: any) {
    if (data.password != data.confirm_password) {
      this.passwordsNotSame = true;
      return;
    }

    // start registration
    let newuser = new User(data.username, data.password);
    this.userService.registerUser(newuser).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

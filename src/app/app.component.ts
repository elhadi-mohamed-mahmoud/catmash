import { Component } from '@angular/core';
import { Cat } from './classes/Cat';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cat-mash';
  cats: Cat[] = [];
  processedCats : Cat[] = [];
  wantToPlay: boolean = false;
  wantSeeScore: boolean = false;
  goHome: boolean = true;

  constructor(private userService: UserService){}

  play() {
    this.wantToPlay = true;
    this.wantSeeScore = false;
    this.goHome = false;
  }

  seeScore() {
    this.wantSeeScore = true;
    this.wantToPlay = false;
    this.goHome = false;
  }

  goHomePage(){
    this.wantSeeScore = false;
    this.wantToPlay = false;
    this.goHome = true;
  }

  loggedIn(){
    return this.userService.isAuthenticated();
  }
}

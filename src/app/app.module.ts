import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayComponent } from './play/play.component';
import { ScoreComponent } from './score/score.component';
import { HomeComponent } from './Home/Home.component';
import { HttpClientModule } from '@angular/common/http';
import { CatServiceService } from './services/cat-service.service';


@NgModule({
  declarations: [			
    AppComponent,
      PlayComponent,
      ScoreComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [CatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayComponent } from './play/play.component';
import { ScoreComponent } from './score/score.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatServiceService } from './services/cat-service.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './services/user.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    ScoreComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CatServiceService,
    AuthGuard,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

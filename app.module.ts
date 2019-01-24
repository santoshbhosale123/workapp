import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { HeaderComponent } from './header/header.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FollowingComponent } from './following/following.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';

import {FormsModule} from '@angular/forms';
import {RouteGuard} from "./auth/route-guard";
import { NotificationComponent } from './notification/notification.component';
import {NotificationService} from "./shared/notification.service";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    FollowingComponent,
    FavoritesComponent,
    SignUpComponent,
    LoginComponent,
    MyPostsComponent,
    HomeComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RouteGuard,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

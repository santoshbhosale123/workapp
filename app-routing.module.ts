
import {RouteGuard} from './auth/route-guard';
import {NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { FollowingComponent } from "./following/following.component";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { AllPostsComponent } from "./all-posts/all-posts.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { LoginComponent } from "./auth/login/login.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'all-posts',component:AllPostsComponent,canActivate:[RouteGuard]},
  {path:'my-posts',component:MyPostsComponent,canActivate:[RouteGuard]},
  {path:'favorites',component:FavoritesComponent,canActivate:[RouteGuard]},
  {path:'following',component:FollowingComponent,canActivate:[RouteGuard]},
  {path:'sign-up',component:SignUpComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

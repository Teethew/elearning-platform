import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './templates/explore/explore.component';
import { HomeComponent } from './templates/home/home.component';
import { LoginComponent } from './templates/login/login.component';
import { MyComponent } from './templates/my/my.component';
import { PlaylistComponent } from './templates/playlist/playlist.component';
import { SignupComponent } from './templates/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'my', component: MyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

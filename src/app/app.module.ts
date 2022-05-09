import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './templates/login/login.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SignupComponent } from './templates/signup/signup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './templates/home/home.component';
import { ExploreComponent } from './templates/explore/explore.component';
import { TrailCardComponent } from './components/trail-card/trail-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './templates/playlist/playlist.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SafePipe } from './safe.pipe';
import {MatDividerModule} from "@angular/material/divider";
import { FooterComponent } from './templates/footer/footer.component';
import { MyComponent } from './templates/my/my.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ButtonIconComponent,
    SignupComponent,
    HomeComponent,
    ExploreComponent,
    TrailCardComponent,
    PlaylistComponent,
    SafePipe,
    FooterComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

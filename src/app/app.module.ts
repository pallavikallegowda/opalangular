import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchhomeComponent } from './searchhome/searchhome.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { SearcheditemsComponent } from './searcheditems/searcheditems.component';  
import { HttpModule } from '@angular/http';
import { UserinfoComponent } from './User/userinfo/userinfo.component';
import { SigninComponent } from './User/signin/signin.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchhomeComponent,
    SearcheditemsComponent,
    UserinfoComponent,
    SigninComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    
    FormsModule,    
    HttpClientModule,
    HttpModule  
  ],
  providers: [AuthGuard],    
  bootstrap: [AppComponent]
})
export class AppModule { }

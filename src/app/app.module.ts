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

@NgModule({
  declarations: [
    AppComponent,
    SearchhomeComponent,
    SearcheditemsComponent,
    UserinfoComponent,
    SigninComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    
    FormsModule,    
    HttpClientModule,
    HttpModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

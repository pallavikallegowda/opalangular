import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchhomeComponent} from './searchhome/searchhome.component';
import {SearcheditemsComponent} from './searcheditems/searcheditems.component';
import { UserComponent } from './user/user.component';
import {UserinfoComponent} from './User/userinfo/userinfo.component';
import {SigninComponent} from './User/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'SearcheditemsComponent', component: SearcheditemsComponent, pathMatch: 'full' },  
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: UserinfoComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SigninComponent }]
},
{ path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

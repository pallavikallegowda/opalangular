import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchhomeComponent} from './searchhome/searchhome.component';
import {SearcheditemsComponent} from './searcheditems/searcheditems.component';



const routes: Routes = [
  {path:'SearcheditemsComponent', component:SearcheditemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

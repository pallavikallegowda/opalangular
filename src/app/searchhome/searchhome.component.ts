import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../article/article';
import {ArticleService} from '../article/article.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-searchhome',
  templateUrl: './searchhome.component.html',
  styleUrls: ['./searchhome.component.scss']
})
export class SearchhomeComponent{

  constructor(private _router : Router) { }

  searcharticle(form: NgForm) {
    console.log(form.value.searchitem);
    let result = form.value.searchitem;
    this._router.navigate(['SearcheditemsComponent'], { queryParams: { searchedresult: result} });
  }

}

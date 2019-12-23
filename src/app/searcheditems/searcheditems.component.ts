import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article/article.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-searcheditems',
  templateUrl: './searcheditems.component.html',
  styleUrls: ['./searcheditems.component.scss']
})
export class SearcheditemsComponent {
  private arttitle:string = "";
   private articleList: ArticleData;
  constructor(public http: Http, private _router: Router, 
    private _articleService: ArticleService, 
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        this.arttitle = params['searchedresult'];
        this.getSearch(this.arttitle);
      });
     }

  getSearch(arttitle: string) {
    this._articleService.getArticle(arttitle).subscribe(
      data => this.articleList = data
    )
  }
  userdetails(): void {  
      this._router.navigate(['user']);  
  }  
  
}
 interface ArticleData {
    id:string;
    articletitle:string;
    weburl:string;
    fileurl:string;
    publication:string;
    publisheddate:string;
    revisionnumber:string;
    published:string;
    summary:string;
    author:string;
    uploadedby:string;
    bibliography:string;
    category:string;

}

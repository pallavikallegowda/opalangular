import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable , throwError , of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Article} from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
private articleUrl ="https://localhost:44399/api/article"
  constructor(private http :HttpClient) { }

  getArticle(searchitem :string):Observable<Article>{
    const url =`${this.articleUrl}/${searchitem}`;
    return this.http.get<Article>(url).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(err){
    let errorMessage:string;
    if (err.error instanceof ErrorEvent) {    
      errorMessage = `An error occurred: ${err.error.message}`;    
    } else {    
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;    
    }    
    console.error(err);    
    return throwError(errorMessage);    
  }
  private initializeArticle():Article{
    return{
      id:null,
      articletitle:null,
      weburl:null,
      fileurl:null,
      publication:null,
      publisheddate:null,
      revisionnumber:null,
      published:null,
      summary:null,
      author:null,
      uploadedby:null,
      bibliography:null,
      category:null
    };
  }
}

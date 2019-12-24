import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';    
import { catchError, map } from 'rxjs/operators';  
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  private userUrl ="https://localhost:44399/api/user"; 
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
    return this.http.post<User>
    (this.userUrl, user, { headers: headers })    
      .pipe(    
        catchError(this.handleError)
      );    
  }    
  private handleError(err) {    
    let errorMessage: string;    
    if (err.error instanceof ErrorEvent) {    
      errorMessage = `An error occurred: ${err.error.message}`;    
    } else {    
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;    
    }    
    console.error(err);    
    return throwError(errorMessage);    
  }    
  private initializeuser(): User {    
    return {    
      id:null,
    firstname:null,
    lastname:null,
    salutation:null,
    address:null,
    emailid:null,
    phone:null,
    password:null
    };    
  }    
}

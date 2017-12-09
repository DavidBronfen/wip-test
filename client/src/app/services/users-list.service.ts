import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IUser } from '../models/user';

@Injectable()
export class UsersListService {

  private _usersURL = 'http://localhost:3000/search-users/';

  constructor(private _http: Http) { }

  getUsers(keyWord: String): Observable<IUser[]> {
    return this._http.get(this._usersURL + keyWord)
    .map((response: Response) => <IUser[]> response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}

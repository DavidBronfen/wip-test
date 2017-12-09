import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ITweet } from '../models/tweet';

@Injectable()
export class TweetsListService {

  private _tweetsURL = 'http://localhost:3000/get-user-tweets/';

  constructor(private _http: Http) { }

  getTweets(uid: String): Observable<ITweet[]> {
    return this._http.get(`http://localhost:3000/get-user-tweets/${uid}`)
    .map((response: Response) => <ITweet[]> response.json())
    .catch(this.handleError);
  }

  getMoreTweets(payload): Observable<ITweet[]> {
    return this._http.get(`http://localhost:3000/get-more-tweets/${payload.userUid}/${payload.lastTweetId}`)
    .map((response: Response) => <ITweet[]> response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}

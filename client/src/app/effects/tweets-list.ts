import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TweetsListService } from '../services/tweets-list.service';
import * as tweetsList from '../actions/tweets-list';

@Injectable()
export class TweetsListEffects {
  constructor(
    private actions$: Actions,
    private tweetsListService: TweetsListService
  ) { }

  @Effect()
  loadTweetsList$: Observable<Action>= this.actions$
    .ofType(tweetsList.LOAD_TWEETS_LIST)
    .map(toPayload)
    .switchMap(uid => this.tweetsListService.getTweets(uid)
      .map(data => new tweetsList.LoadTweetsListSuccessAction(data))
      // .catch(() => of({ type: 'LOAD_TWEETS_LIST_FAILED' }))
    );

  @Effect()
  loadMoreTweets$: Observable<Action>= this.actions$
    .ofType(tweetsList.LOAD_MORE_TWEETS)
    .map(toPayload)
    .switchMap(payload => this.tweetsListService.getMoreTweets(payload)
      .map(data => new tweetsList.LoadMoreTweetsSuccessAction(data))
    // .catch(() => of({ type: 'LOAD_MORE_TWEETS_FAILED' }));
    );
}

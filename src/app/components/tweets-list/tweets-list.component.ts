import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ITweet } from '../../models/tweet';
import { TweetsListService } from '../../services/tweets-list.service';

import * as tweetsListAction from '../../actions/tweets-list';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.scss']
})
export class TweetsListComponent {

  public tweets$: Observable<ITweet[]>;
  public selectedUser: String;
  private errorMessage: String;

  constructor(private store: Store<fromRoot.State>) {
      this.tweets$ = this.store.select(fromRoot.getTweetsListState);
      this.store.select(fromRoot.getSelectedUserState).subscribe(
        res => this.selectedUser = res
      );
  }

  loadMoreTweets(tweets$) {
    tweets$.subscribe(t => this.store.dispatch(new tweetsListAction.LoadMoreTweetsAction({
      userUid: this.selectedUser,
      lastTweetId: t.length
    })));
  }

}

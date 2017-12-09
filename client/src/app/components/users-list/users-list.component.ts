import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { IUser } from '../../models/user';

import * as tweetsListAction from '../../actions/tweets-list';
import * as usersListAction from '../../actions/users-list';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  @Output('updateTweetListEvent')
  updateTweetListEvent = new EventEmitter<boolean>();

  public users$: Observable<IUser[]>;
  private errorMessage: string;

  constructor(private store: Store<fromRoot.State>) {
      this.users$ = this.store.select(fromRoot.getUsersState);
  }

  displayUserTweets(id) {
    this.updateTweetListEvent.emit(true);
    this.store.dispatch(new tweetsListAction.LoadTweetsListAction(id));
    this.store.dispatch(new usersListAction.UpdateSelectedUserAction(id));
  }

}

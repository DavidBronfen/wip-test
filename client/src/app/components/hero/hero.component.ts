import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { SlicePipe } from '@angular/common';

import 'rxjs/add/operator/debounceTime';

import { IUser } from '../../models/user';

import * as usersListAction from '../../actions/users-list';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Output('updateUserListEvent')
  updateUserListEvent = new EventEmitter<boolean>();

  title = 'Welcome to WebintPro!';
  public users$: Observable<IUser[]>;
  private errorMessage: string;
  public term = new FormControl();
  public showSearchResult = false;

  constructor(private store: Store<fromRoot.State>) {
    this.users$ = this.store.select(fromRoot.getUsersState);

    this.term.valueChanges
     .debounceTime(300)
     .subscribe(searchWord => {
       if (searchWord) {
         this.store.dispatch(new usersListAction.LoadUsersListAction(searchWord));
         this.showSearchResult = true;
       } else {
         this.showSearchResult = false;
       }
     });
  }

  displayUsers(event) {
    this.updateUserListEvent.emit(true);
    this.showSearchResult = false;
  }

}

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { UsersListService } from '../services/users-list.service';
import * as usersList from '../actions/users-list';

@Injectable()
export class UsersListEffects {
  constructor(
    private actions$: Actions,
    private usersListService: UsersListService
  ) { }

  @Effect()
  loadUsersList$: Observable<Action>= this.actions$
    .ofType(usersList.LOAD_USERS_LIST)
    .map(toPayload)
    .switchMap(keyWord => this.usersListService.getUsers(keyWord)
      .map(data => new usersList.LoadUsersListSuccessAction(data))
      // .catch(() => of({ type: 'LOAD_USERS_LIST_FAILED' }));
    );
}

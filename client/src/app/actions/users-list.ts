import { Action } from '@ngrx/store';
import { IUser } from '../models/user';

export const LOAD_USERS_LIST =  '[UsersList] Load UsersList';
export const LOAD_USERS_LIST_SUCCESS = '[UsersList] Load UsersList Success';
export const LOAD_USERS_LIST_FAILED = '[UsersList] Load UsersList Failed';
export const UPDATE_SELECTED_USER = '[UsersList] Update Selected User';
export const UPDATE_SELECTED_USER_FAILED = '[UsersList] Update Selected User Failed';



export class LoadUsersListAction implements Action {
  readonly type = LOAD_USERS_LIST;

  constructor(public payload: String) { }
}

export class LoadUsersListSuccessAction implements Action {
  readonly type = LOAD_USERS_LIST_SUCCESS;

  constructor(public payload: IUser[]) { }
}

export class LoadUsersListActionFailed implements Action {
  readonly type = LOAD_USERS_LIST_FAILED;

  constructor() { }
}

export class UpdateSelectedUserAction implements Action {
  readonly type = UPDATE_SELECTED_USER;

  constructor(public payload: String) { }
}

export class UpdateSelectedUserActionFailed implements Action {
  readonly type = UPDATE_SELECTED_USER_FAILED;

  constructor() { }
}

export type Actions
  = LoadUsersListAction
  | LoadUsersListSuccessAction
  | LoadUsersListActionFailed
  | UpdateSelectedUserAction
  | UpdateSelectedUserActionFailed;

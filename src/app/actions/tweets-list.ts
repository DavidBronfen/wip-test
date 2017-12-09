import { Action } from '@ngrx/store';
import { ITweet } from '../models/tweet';

export const LOAD_TWEETS_LIST =  '[TweetsList] Load TweetsList';
export const LOAD_TWEETS_LIST_SUCCESS = '[TweetsList] Load TweetsList Success';
export const LOAD_TWEETS_LIST_FAILED = '[TweetsList] Load TweetsList Failed';
export const LOAD_MORE_TWEETS =  '[TweetsList] Load More Tweets';
export const LOAD_MORE_TWEETS_SUCCESS = '[TweetsList] Load More Tweets Success';
export const LOAD_MORE_TWEETS_FAILED = '[TweetsList] Load More Tweets Failed';

export class LoadTweetsListAction implements Action {
  readonly type = LOAD_TWEETS_LIST;

  constructor(public payload: String) { }
}

export class LoadTweetsListSuccessAction implements Action {
  readonly type = LOAD_TWEETS_LIST_SUCCESS;

  constructor(public payload: ITweet[]) { }
}

export class LoadTweetsListActionFailed implements Action {
  readonly type = LOAD_TWEETS_LIST_FAILED;

  constructor() { }
}

export class LoadMoreTweetsAction implements Action {
  readonly type = LOAD_MORE_TWEETS;

  constructor(public payload: {userUid: String, lastTweetId: Number}) { }
}

export class LoadMoreTweetsSuccessAction implements Action {
  readonly type = LOAD_MORE_TWEETS_SUCCESS;

  constructor(public payload: ITweet[]) { }
}

export class LoadMoreTweetsActionFailed implements Action {
  readonly type = LOAD_MORE_TWEETS_FAILED;

  constructor() { }
}

export type Actions
  = LoadTweetsListAction
  | LoadTweetsListSuccessAction
  | LoadTweetsListActionFailed
  | LoadMoreTweetsAction
  | LoadMoreTweetsSuccessAction
  | LoadMoreTweetsActionFailed;

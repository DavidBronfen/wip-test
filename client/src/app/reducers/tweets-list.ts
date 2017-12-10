import { ITweet } from '../models/tweet';
import * as tweetsList from '../actions/tweets-list';

export type State = ITweet[];

const initialState: State = [{
  text: '',
  user: {
    name: '',
    screen_name: '',
    profile_image_url: '',
  }
}];

export function reducer(state = initialState, action: tweetsList.Actions): State {
  switch (action.type) {
    case tweetsList.LOAD_TWEETS_LIST: {
      return state;
    }

    case tweetsList.LOAD_TWEETS_LIST_SUCCESS: {
      return action.payload;
    }

    case tweetsList.LOAD_TWEETS_LIST_FAILED: {
      console.log('SOMETHING_FAILED');
      break;
    }

    case tweetsList.LOAD_MORE_TWEETS: {
      return state;
    }

    case tweetsList.LOAD_MORE_TWEETS_SUCCESS: {
      return state.concat(action.payload);
    }

    case tweetsList.LOAD_MORE_TWEETS_FAILED: {
      console.log('SOMETHING_FAILED');
      break;
    }

    default: {
      return state;
    }
  }
}

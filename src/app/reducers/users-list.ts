import { IUser } from '../models/user';
import * as usersList from '../actions/users-list';

export interface State {
 users: IUser[];
 selectedUser: String;
}

const initialState: State = {
  users: [{
    name: '',
    screen_name: '',
    profile_image_url: '',
    location: '',
  }],
  selectedUser: '',
};

export function reducer(state = initialState, action: usersList.Actions): State {
  switch (action.type) {
    case usersList.LOAD_USERS_LIST: {
      return state;
    }

    case usersList.LOAD_USERS_LIST_SUCCESS: {
      const newState = { users: action.payload };

      return {
        // Return sliced array only the properties.
        ...state,
        ...newState,
      };
    }

    case usersList.LOAD_USERS_LIST_FAILED: {
      console.log('LOAD_USERS_LIST_FAILED');
      break;
    }

    case usersList.UPDATE_SELECTED_USER: {
      const newState = { selectedUser: action.payload };

      return {
        ...state,
        ...newState,
      };
    }

    case usersList.UPDATE_SELECTED_USER_FAILED: {
      console.log('UPDATE_SELECTED_USER_FAILED');
      break;
    }

    default: {
      return state;
    }
  }
}

export const getSelectedUserState = (state: State) => state.selectedUser;
export const getUsersListUsersState = (state: State) => state.users;

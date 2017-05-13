import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const DEFAULT_STATE = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = DEFAULT_STATE, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const user = { currentUser: action.currentUser };
      return merge({}, DEFAULT_STATE, user);
    case RECEIVE_ERRORS:
      const errors = { errors: action.errors };
      return merge({}, DEFAULT_STATE, errors);
    default:
      return state;
  }
};

export default SessionReducer;

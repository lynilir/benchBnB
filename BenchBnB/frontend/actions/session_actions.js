import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const loginUser = (user) => (dispatch) => (
  SessionUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logoutUser = (dispatch) => (
  SessionUtil.logout()
    .then(dispatch(receiveCurrentUser(null)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signupUser = (user) => dispatch => (
  SessionUtil.signup(user)
  .then(newUser => dispatch(receiveCurrentUser(newUser)))
  .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.signupUser = signupUser;

loginUser({
  username: 'user1',
  password: 'password'
})

import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB!</h1>, root);
});

import * as APIUtil from './util/session_api_util';

window.signup = APIUtil.signup;
window.login = APIUtil.login;
window.logout = APIUtil.logout;

signup({
  username: 'user4',
  password: 'password'
})

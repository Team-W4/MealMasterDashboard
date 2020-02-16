import * as routes from '../constants/routes';
import {
  deleteHelper,
  getHelper,
  postHelper,
  putHelper,
} from '../utils/fetchHelper';

class UserService {
  login = (email, password) => {
    const route = `${routes.USER}${routes.LOGIN}`;
    return postHelper(route, { email, password });
  };

  logout = () => {
    const route = `${routes.USER}${routes.LOGOUT}`;
    return postHelper(route);
  };

  register = (email, password) => {
    const route = `${routes.USER}${routes.REGISTER}`;
    const body = {
      email,
      password,
      username: email,
    };
    return postHelper(route, body);
  };

  // Not used
  getProfile = () => getHelper(routes.PROFILE);

  updateProfile = user => putHelper(routes.PROFILE, user);

  deleteProfile = () => deleteHelper(routes.PROFILE);

  getUserById = userId => {
    const route = `${routes.USER}/${userId}`;
    return getHelper(route);
  };

  searchUsers = searchTerms => {
    const route = `${routes.USER}${routes.SEARCH}?${
      routes.SEARCHTERMS
    }=${searchTerms}`;
    return getHelper(route);
  };
}

const singleton = new UserService();

export default singleton;

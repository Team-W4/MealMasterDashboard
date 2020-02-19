import AsyncStorage from '@react-native-community/async-storage';
import { userActionTypes as actionTypes } from '../constants/actionTypes';
import { UserService } from '../services';

// Note: Several of these are very optimistic.
// Will likely need to add success and failure actionTypes.

export const searchUsers = searchTerms => dispatch => {
  dispatch({ type: actionTypes.FETCH_USERS });

  UserService.searchUsers(searchTerms).then(users =>
    dispatch(receiveUsers(users)),
  );
};

export const getUserById = userId => dispatch => {
  dispatch({ type: actionTypes.FETCH_USER });

  UserService.getUserById(userId).then(user => dispatch(receiveUser(user)));
};

export const logIn = (email, password) => dispatch => {
  dispatch({ type: actionTypes.LOGIN });

  UserService.login(email, password).then(async profile => {
    try {
      await AsyncStorage.setItem('userToken', `${profile.id}`);
      dispatch(receiveProfile(profile));
    } catch (error) {
      console.log('Failed to store user token');
    }
  });
};

export const logOut = () => dispatch => {
  UserService.logout().then(() => dispatch({ type: actionTypes.LOGOUT }));
};

//TODO: adds response && errors here
export const register = (email, password) => dispatch => {
  UserService.register(email, password);
};

export const restoreToken = userToken => dispatch =>
  dispatch({ type: actionTypes.RESTORE_TOKEN, token: userToken });

export const updateProfile = profileData => dispatch => {
  dispatch({ type: actionTypes.UPDATE_PROFILE });

  UserService.updateProfile(profileData).then(profile =>
    dispatch(receiveProfile(profile)),
  );
};

export const deleteProfile = () => dispatch => {
  UserService.deleteProfile().then(() =>
    dispatch({ type: actionTypes.DELETE_PROFILE }),
  );
};

const receiveUsers = users => ({
  type: actionTypes.RECEIVE_USERS,
  users,
});

const receiveUser = user => ({
  type: actionTypes.RECEIVE_USER,
  user,
});

const receiveProfile = profile => ({
  type: actionTypes.RECEIVE_PROFILE,
  profile,
  userToken: `${profile.id}`,
});

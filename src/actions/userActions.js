import AsyncStorage from '@react-native-community/async-storage';
import { userActionTypes as actionTypes } from '../constants/actionTypes';
import { UserService } from '../services';

const receiveUser = (user) => ({
  type: actionTypes.RECEIVE_USER,
  user,
});

const receiveProfile = (profile) => ({
  type: actionTypes.RECEIVE_PROFILE,
  profile,
  userToken: `${profile.id}`,
});

const storeToken = async (dispatch, profile, email, password) => {
  if (profile && profile.id) {
    try {
      await AsyncStorage.setItem('savedUser', JSON.stringify({ email, password }));
      await AsyncStorage.setItem('userToken', `${profile.id}`);

      dispatch(receiveProfile(profile));
    } catch (error) {
      console.error('Failed to store user token');
    }
  }
};

// Note: Several of these are very optimistic.
// Will likely need to add success and failure actionTypes.

export const getUserById = (userId) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_USER });

  UserService.getUserById(userId).then((user) => dispatch(receiveUser(user)));
};

export const logIn = (email, password) => (dispatch) => {
  dispatch({ type: actionTypes.LOGIN });

  UserService.login(email, password).then(
    (profile) => storeToken(dispatch, profile, email, password),
  );
};

export const logOut = () => (dispatch) => {
  UserService.logout().then(async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      dispatch({ type: actionTypes.LOGOUT });
    } catch (error) {
      console.error('Failed to clear user token');
    }
  });
};

// TODO: adds response && errors here
export const register = (email, password) => (dispatch) => {
  UserService.register(email, password).then(
    (profile) => storeToken(dispatch, profile, email, password),
  );
};

export const restoreToken = () => async (dispatch) => {
  let userToken = null;

  try {
    userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      const { email, password } = JSON.parse(await AsyncStorage.getItem('savedUser'));

      if (email && password) {
        UserService.login(email, password).then(
          (profile) => storeToken(dispatch, profile, email, password),
        );
      }
    }
  } catch (e) {
    console.error('Failed to retrieve user token');
  }
};

export const updateProfile = (profileData) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_PROFILE });

  UserService.updateProfile(profileData).then((profile) => dispatch(receiveProfile(profile)));
};

export const clearUserDetails = () => (dispatch) => dispatch({
  type: actionTypes.CLEAR_USER_DETAILS,
});

export const deleteProfile = () => (dispatch) => {
  UserService.deleteProfile().then(() => dispatch({ type: actionTypes.DELETE_PROFILE }));
};

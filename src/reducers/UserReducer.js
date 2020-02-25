import { userActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  profile: {},
  users: [],
  userDetails: {},
  userToken: null,
  isFetching: false,
  isLoggedOut: false,
};

const UserReducer = createReducer(initialState, {
  [actionTypes.FETCH_USER]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.FETCH_PROFILE]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.FETCH_USERS]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.RECEIVE_USER]: (state, { user }) => ({
    ...state,
    isFetching: false,
    userDetails: user,
  }),
  [actionTypes.RECEIVE_USERS]: (state, { users }) => ({
    ...state,
    isFetching: false,
    users,
  }),
  [actionTypes.RECEIVE_PROFILE]: (state, { profile, userToken }) => ({
    ...state,
    profile,
    userToken,
    isFetching: false,
    isLoggedOut: false,
  }),
  [actionTypes.RESTORE_TOKEN]: (state, { token }) => ({
    ...state,
    userToken: token,
  }),
  [actionTypes.LOGIN]: (state) => ({
    ...state,
    isFetching: true,
  }),
  // May need to add Success and Failures for these
  [actionTypes.UPDATE_PROFILE]: (state) => ({
    ...state,
  }),
  [actionTypes.LOGOUT]: (state) => ({
    ...state,
    userToken: null,
    profile: {},
    isLoggedOut: true,
  }),
  [actionTypes.REGISTER]: (state) => ({
    ...state,
  }),
  [actionTypes.CLEAR_USER_DETAILS]: (state) => ({
    ...state,
    userDetails: {},
  }),
});

export default UserReducer;

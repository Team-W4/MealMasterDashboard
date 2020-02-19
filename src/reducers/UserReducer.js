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
  [actionTypes.FETCH_USER]: state => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.FETCH_PROFILE]: state => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.FETCH_USERS]: state => ({
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
  [actionTypes.RECEIVE_PROFILE]: (state, { profile }) => ({
    ...state,
    isFetching: false,
    profile,
  }),
  [actionTypes.RESTORE_TOKEN]: (state, { token }) => ({
    ...state,
    userToken: token,
    isFetching: false,
  }),
  [actionTypes.LOGIN]: (state, { token }) => ({
    ...state,
    userToken: token,
    isFetching: true,
    isLoggedOut: false,
  }),
  // May need to add Success and Failures for these
  [actionTypes.UPDATE_PROFILE]: state => ({
    ...state,
  }),
  [actionTypes.LOGOUT]: state => ({
    ...state,
    userToken: null,
    isLoggedOut: true,
  }),
  [actionTypes.REGISTER]: state => ({
    ...state,
  }),
});

export default UserReducer;

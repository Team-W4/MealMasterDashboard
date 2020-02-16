import { userActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  profile: {},
  users: [],
  user: {},
  isFetching: false,
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
    user,
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
  [actionTypes.LOGIN]: state => ({
    ...state,
    isFetching: true,
  }),
  // May need to add Success and Failures for these
  [actionTypes.UPDATE_PROFILE]: state => ({
    ...state,
  }),
  [actionTypes.LOGOUT]: state => ({
    ...state,
  }),
  [actionTypes.REGISTER]: state => ({
    ...state,
  }),
});

export default UserReducer;

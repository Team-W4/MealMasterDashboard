import { searchActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  foods: [],
  recipes: [],
  users: [],
  tags: [],
  isFetching: false,
};

const SearchReducer = createReducer(initialState, {
  [actionTypes.SEARCH_FOODS]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.SEARCH_RECIPES]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.SEARCH_USERS]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.SEARCH_TAGS]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.RECEIVE_SEARCH_FOODS]: (state, { foods }) => ({
    ...state,
    foods,
    isFetching: false,
  }),
  [actionTypes.RECEIVE_SEARCH_RECIPES]: (state, { recipes }) => ({
    ...state,
    recipes,
    isFetching: false,
  }),
  [actionTypes.RECEIVE_SEARCH_USERS]: (state, { users }) => ({
    ...state,
    isFetching: false,
    users,
  }),
  [actionTypes.RECEIVE_SEARCH_TAGS]: (state, { tags }) => ({
    ...state,
    tags,
    isFetching: false,
  }),
  [actionTypes.CLEAR_SEARCH]: () => ({
    ...initialState,
  }),
});

export default SearchReducer;

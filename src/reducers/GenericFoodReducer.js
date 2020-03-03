import { genericFoodActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  foodDetails: {},
  isFetching: false,
};

const GenericFoodReducer = createReducer(initialState, {
  [actionTypes.FETCH_FOOD]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.FETCH_FOODS]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.RECEIVE_FOOD]: (state, { food }) => ({
    ...state,
    isFetching: false,
    foodDetails: food,
  }),
  [actionTypes.RECEIVE_FOODS]: (state, { foods }) => ({
    ...state,
    isFetching: false,
    foods,
  }),
  [actionTypes.CLEAR_FOODS]: (state) => ({
    ...state,
    isFetching: false,
    foods: [],
  }),
});

export default GenericFoodReducer;

import { mealActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  isFetching: false,
}

const MealReducer = createReducer(initialState, {
  [actionTypes.REQUEST_CONSUME_MEAL]: state => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.CONSUME_MEAL_SUCCESS]: state => ({
    ...state,
    isFetching: false,
  }),
  [actionTypes.CONSUME_MEAL_FAIL]: state => ({
    ...state,
    isFetching: false,
  })
})
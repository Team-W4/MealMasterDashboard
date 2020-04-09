import { mealActionTypes as actionTypes } from '../constants/actionTypes';
import { MealService } from '../services';

export const consumeMeal = meal => dispatch => {
  dispatch(actionTypes.REQUEST_CONSUME_MEAL);

  MealService.consumeMeal(meal)
    .then(() => {
      dispatch({ type: actionTypes.CONSUME_MEAL_SUCCESS });
    })
    .catch(e => {
      console.error(e);
      dispatch({ type: actionTypes.CONSUME_MEAL_FAIL });
    });
};

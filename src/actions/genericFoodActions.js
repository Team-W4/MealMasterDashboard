import { genericFoodActionTypes as actionTypes } from '../constants/actionTypes';
import { GenericFoodService } from '../services';

export const searchGenericFood = searchTerms => dispatch => {
  dispatch({ type: actionTypes.FETCH_FOODS });

  GenericFoodService.searchGenericFood(searchTerms).then(foods =>
    dispatch(receiveFoods(foods)),
  );
};

export const getGenericFoodById = foodId => dispatch => {
  dispatch({ type: actionTypes.FETCH_FOOD });

  GenericFoodService.getGenericFoodById(foodId).then(food =>
    dispatch(receiveFood(food)),
  );
};

const receiveFood = food => ({
  type: actionTypes.RECEIVE_FOOD,
  food,
});

const receiveFoods = foods => ({
  type: actionTypes.RECEIVE_FOODS,
  foods,
});

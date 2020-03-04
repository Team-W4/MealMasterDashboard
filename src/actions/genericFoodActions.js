import { genericFoodActionTypes as actionTypes } from '../constants/actionTypes';
import { GenericFoodService } from '../services';

export const receiveFood = (food) => ({
  type: actionTypes.RECEIVE_FOOD,
  food,
});

export const getGenericFoodById = (foodId) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_FOOD });

  GenericFoodService.getGenericFoodById(foodId).then((food) => dispatch(receiveFood(food)));
};

import { genericFoodActionTypes as actionTypes } from '../constants/actionTypes';
import { GenericFoodService } from '../services';

const receiveFood = (food) => ({
  type: actionTypes.RECEIVE_FOOD,
  food,
});

export const getGenericFoodById = (foodId) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_FOOD });

  GenericFoodService.getGenericFoodById(foodId).then((food) => dispatch(receiveFood(food)));
};

export const clearSearch = () => ({
  type: actionTypes.CLEAR_FOODS,
});

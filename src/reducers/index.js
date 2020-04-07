import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';
import UserReducer from './UserReducer';
import StockReducer from './StockReducer';
import GenericFoodReducer from './GenericFoodReducer';
import SearchReducer from './SearchReducer';
import MealReducer from './MealReducer';

const RootReducer = combineReducers({
  recipe: RecipeReducer,
  user: UserReducer,
  stock: StockReducer,
  food: GenericFoodReducer,
  search: SearchReducer,
  meal: MealReducer,
});

export default RootReducer;

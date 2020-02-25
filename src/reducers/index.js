import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';
import UserReducer from './UserReducer';
import StockReducer from './StockReducer';
import GenericFoodReducer from './GenericFoodReducer';

const RootReducer = combineReducers({
  recipe: RecipeReducer,
  user: UserReducer,
  stock: StockReducer,
  food: GenericFoodReducer,
});

export default RootReducer;

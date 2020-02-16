import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';
import UserReducer from './UserReducer';
import StockReducer from './StockReducer';

const RootReducer = combineReducers({
  recipe: RecipeReducer,
  user: UserReducer,
  stock: StockReducer,
});

export default RootReducer;

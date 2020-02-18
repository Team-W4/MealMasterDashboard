import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';
import UserReducer from './UserReducer';

const RootReducer = combineReducers({
  recipe: RecipeReducer,
  user: UserReducer,
});

export default RootReducer;

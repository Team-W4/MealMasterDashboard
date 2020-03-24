import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';
import UserReducer from './UserReducer';
import StockReducer from './StockReducer';
import GenericFoodReducer from './GenericFoodReducer';
import SearchReducer from './SearchReducer';
import RecipeRecommendationReducer from './RecipeRecommendationReducer';

const RootReducer = combineReducers({
  recipe: RecipeReducer,
  user: UserReducer,
  stock: StockReducer,
  food: GenericFoodReducer,
  search: SearchReducer,
  recipeRecommendations: RecipeRecommendationReducer,
});

export default RootReducer;

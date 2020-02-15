import { combineReducers } from 'redux';
import RecipeReducer from 'RecipeReducer';

const RootReducer = combineReducers({ recipe: RecipeReducer });

export default RootReducer;

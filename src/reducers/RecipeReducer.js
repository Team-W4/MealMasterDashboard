import { recipeActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  recipes: [],
  searchedRecipes: [],
  recipeDetails: {},
  isFetching: false,
};

const RecipeReducer = createReducer(initialState, {
  [actionTypes.FETCH_RECIPE]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.FETCH_RECIPES]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.RECEIVE_RECIPE]: (state, { recipe }) => ({
    ...state,
    isFetching: false,
    recipeDetails: recipe,
  }),
  [actionTypes.RECEIVE_RECIPES]: (state, { recipes }) => ({
    ...state,
    isFetching: false,
    recipes,
  }),
  [actionTypes.RECEIVE_SEARCHED_RECIPES]: (state, { searchedRecipes }) => ({
    ...state,
    isFetching: false,
    searchedRecipes,
  }),
  [actionTypes.CLEAR_RECIPE_DETAILS]: (state) => ({
    ...state,
    recipeDetails: {},
  }),
});

export default RecipeReducer;

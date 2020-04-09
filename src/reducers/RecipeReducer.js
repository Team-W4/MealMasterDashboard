import { recipeActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  recipes: [],
  recipeRecs: [],
  likedRecipes: [],
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
  [actionTypes.CLEAR_RECIPE_DETAILS]: (state) => ({
    ...state,
    recipeDetails: {},
  }),
  [actionTypes.FETCH_RECIPE_RECS]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.RECEIVE_RECIPE_RECS]: (state, { recipeRecs }) => ({
    ...state,
    isFetching: false,
    recipeRecs,
  }),
  [actionTypes.FETCH_LIKED_RECIPES]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.RECEIVE_LIKED_RECIPES]: (state, { likedRecipes }) => ({
    ...state,
    isFetching: false,
    likedRecipes,
  }),
});

export default RecipeReducer;

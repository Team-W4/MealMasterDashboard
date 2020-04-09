import { recipeActionTypes as actionTypes } from '../constants/actionTypes';
import { RecipeService } from '../services';

const receiveRecipe = (recipe) => ({
  type: actionTypes.RECEIVE_RECIPE,
  recipe,
});

const receiveRecipes = (recipes) => ({
  type: actionTypes.RECEIVE_RECIPES,
  recipes,
});

const receiveRecipeRecommendations = (recipeRecs) => ({
  type: actionTypes.RECEIVE_RECIPE_RECS,
  recipeRecs,
});

export const getRecipeById = (recipeId) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_RECIPE });

  RecipeService.getRecipeById(recipeId).then((recipe) => dispatch(receiveRecipe(recipe)));
};

export const clearRecipeDetails = () => (dispatch) => dispatch({
  type: actionTypes.CLEAR_RECIPE_DETAILS,
});

export const getRecipesByUser = (userId) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_RECIPES });

  RecipeService.getRecipesByUser(userId).then((recipes) => dispatch(receiveRecipes(recipes)));
};

export const getRecipeRecommendations = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_RECIPE_RECS });

  RecipeService.getRecipeRecommendations().then(
    (recipeRecs) => dispatch(receiveRecipeRecommendations(recipeRecs)),
  );
};

export const likeRecipe = (recipeId) => (dispatch) => {
  RecipeService.likeRecipe(recipeId).then(
    (recipe) => dispatch(getRecipeById(recipe.id)),
  );
};

export const unlikeRecipe = (recipeId) => (dispatch) => {
  RecipeService.unlikeRecipe(recipeId).then(
    (recipe) => dispatch(getRecipeById(recipe.id)),
  );
};

export const createRecipe = (recipeDetails) => (dispatch) => {
  RecipeService.createRecipe(recipeDetails).then(
    (recipe) => dispatch(getRecipeById(recipe.id)),
  );
};

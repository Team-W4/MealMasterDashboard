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

const receiveLikedRecipes = (likedRecipes) => ({
  type: actionTypes.RECEIVE_LIKED_RECIPES,
  likedRecipes,
});

const receiveRecipeToLike = (recipeToLike) => ({
  type: actionTypes.RECEIVE_RECIPE_TO_LIKE,
  recipeToLike,
});

const receiveRecipeToUnlike = (recipeToUnlike) => ({
  type: actionTypes.RECEIVE_RECIPE_TO_UNLIKE,
  recipeToUnlike,
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

  RecipeService.getRecipeRecommendations().then((recipeRecs) => dispatch(receiveRecipeRecommendations(recipeRecs)));
};

export const getLikedRecipes = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_LIKED_RECIPES});

  RecipeService.getLikedRecipes().then((likedRecipes) => dispatch(receiveLikedRecipes(likedRecipes)));
}

export const getRecipeToLike = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_RECIPE_TO_LIKE});

  RecipeService.getRecipeToLike().then((recipeToLike) => dispatch(receiveRecipeToLike(recipeToLike)));
}

export const getRecipeToUnike = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_RECIPE_TO_UNLIKE});

  RecipeService.getRecipeToUnike().then((recipeToUnike) => dispatch(receiveRecipeToUnlike(recipeToUnike)));
}

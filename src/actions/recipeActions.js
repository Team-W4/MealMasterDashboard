import { recipeActionTypes as actionTypes } from '../constants/actionTypes';
import { RecipeService } from '../services';

export const searchRecipes = searchTerms => dispatch => {
  dispatch({ type: actionTypes.FETCH_RECIPES });

  RecipeService.searchRecipes(searchTerms).then(recipes =>
    dispatch(receiveRecipes(recipes)),
  );
};

export const getRecipeById = recipeId => dispatch => {
  dispatch({ type: actionTypes.FETCH_RECIPE });

  RecipeService.getRecipeById(recipeId).then(recipe =>
    dispatch(receiveRecipe(recipe)),
  );
};

export const clearRecipeDetails = () => dispatch =>
  dispatch({ type: actionTypes.CLEAR_RECIPE_DETAILS });

export const getRecipesByUser = userId => dispatch => {
  dispatch({ type: actionTypes.FETCH_RECIPES });

  RecipeService.getRecipesByUser(userId).then(recipes =>
    dispatch(receiveRecipes(recipes)),
  );
};

const receiveRecipe = recipe => ({
  type: actionTypes.RECEIVE_RECIPE,
  recipe,
});

const receiveRecipes = recipes => ({
  type: actionTypes.RECEIVE_RECIPES,
  recipes,
});

import { recipeRecommendationActionTypes as actionTypes } from '../constants/actionTypes';
import { RecipeRecommendationService } from '../services';

const receiveRecipeRecommendations = (recipeRecs) => ({
  type: actionTypes.RECEIVE_RECIPE_RECS,
  recipeRecs,
});


export const getRecipeRecommendations= () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_RECIPE_RECS });

  RecipeRecommendationService.getRecipeRecommendations().then((recipeRecs) => dispatch(receiveRecipeRecommendations(recipeRecs)));
};

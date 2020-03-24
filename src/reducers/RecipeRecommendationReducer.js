import { recipeRecommendationActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  isFetching: false,
};

const RecipeRecommendationReducer = createReducer(initialState, {
  [actionTypes.FETCH_RECIPE_RECS]: (state) => ({
    ...state,
    isFetching: true,
  }),
});

export default RecipeRecommendationReducer;

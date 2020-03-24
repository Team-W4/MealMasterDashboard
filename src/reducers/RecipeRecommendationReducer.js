import { recipeRecommendationActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  isFetching: false,
  recipeRecs: [],
};

const RecipeRecommendationReducer = createReducer(initialState, {
  [actionTypes.FETCH_RECIPE_RECS]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.RECEIVE_RECIPE_RECS]: (state, { recipeRecs }) => ({
    ...state,
    isFetching: false,
    recipeRecs,
  }),
});

export default RecipeRecommendationReducer;

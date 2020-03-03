import { GenericFoodService, RecipeService, UserService } from '../services';
import { searchActionTypes as actionTypes } from '../constants/actionTypes';

const receiveSearchFoods = (foods) => ({
  type: actionTypes.RECEIVE_SEARCH_FOODS,
  foods,
});

const receiveSearchRecipes = (recipes) => ({
  type: actionTypes.RECEIVE_SEARCH_RECIPES,
  recipes,
});

const receiveSearchUsers = (users) => ({
  type: actionTypes.RECEIVE_SEARCH_USERS,
  users,
});

// TODO: Add search tags
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const receiveSearchTags = (tags) => ({
  type: actionTypes.RECEIVE_SEARCH_TAGS,
  tags,
});

export const clearSearch = () => ({
  type: actionTypes.CLEAR_SEARCH,
});

export const searchFoods = (searchTerms) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_FOODS });

  GenericFoodService.searchGenericFood(searchTerms).then(
    (foods) => dispatch(receiveSearchFoods(foods)),
  );
};

export const searchRecipes = (searchTerms) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_RECIPES });

  RecipeService.searchRecipes(searchTerms).then(
    (recipes) => dispatch(receiveSearchRecipes(recipes)),
  );
};

export const searchUsers = (searchTerms) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_USERS });

  UserService.searchUsers(searchTerms).then(
    (users) => dispatch(receiveSearchUsers(users)),
  );
};

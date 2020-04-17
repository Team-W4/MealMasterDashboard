import { getHelper, postHelper, deleteHelper } from '../utils/fetchHelper';
import * as routes from '../constants/routes';

class RecipeService {
  getRecipesByUser = (userId) => {
    const route = `${routes.USER}/${userId}${routes.RECIPE}`;
    return getHelper(route);
  };

  searchRecipes = (searchTerms) => {
    const route = `${routes.RECIPE}${routes.SEARCH}?${
      routes.SEARCHTERMS
    }=${searchTerms}`;
    return getHelper(route);
  };

  getRecipeById = (recipeId) => {
    const route = `${routes.RECIPE}/${recipeId}`;
    return getHelper(route);
  };

  getRecipeRecommendations = () => {
    const route = `${routes.RECIPE}/${routes.RECS}`;
    return getHelper(route);
  };

  getLikedRecipes = () => {
    const route = `${routes.RECIPE}/${routes.LIKE}`;
    return getHelper(route);
  }

  likeRecipe = (recipeId) => {
    const route = `${routes.RECIPE}/${routes.LIKE}/${recipeId}`;
    return postHelper(route);
  }

  unlikeRecipe = (recipeId) => {
    const route = `${routes.RECIPE}/${routes.LIKE}/${recipeId}`;
    return deleteHelper(route);
  }

  createRecipe = (recipe) => {
    const route = `${routes.RECIPE}`;
    return postHelper(route, recipe);
  }
}

const singleton = new RecipeService();

export default singleton;

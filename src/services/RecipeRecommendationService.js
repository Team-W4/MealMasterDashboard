import { getHelper } from '../utils/fetchHelper';
import * as routes from '../constants/routes';

class RecipeRecommendationService {
  getRecipeRecommendations = () => {
    const route = `${routes.RECIPE}/${routes.RECS}`;
    return getHelper(route);
  };
}

const singleton = new RecipeRecommendationService();

export default singleton;







import { getHelper } from '../utils/fetchHelper';
import * as routes from '../constants/routes';

class GenericFoodService {
  searchGenericFood = searchTerms => {
    const route = `${routes.FOOD}${routes.SEARCH}/${searchTerms}`;
    return getHelper(route);
  };

  getGenericFoodById = foodId => {
    const route = `${routes.FOOD}/${foodId}`;
    return getHelper(route);
  };
}

const singleton = new GenericFoodService();

export default singleton;

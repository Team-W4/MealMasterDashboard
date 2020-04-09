import { postHelper } from '../utils/fetchHelper';
import * as routes from '../constants/routes';

class MealService {
  consumeMeal = meal => postHelper(routes.MEAL + routes.CONSUME, meal);
}

const singleton = new MealService();

export default singleton;

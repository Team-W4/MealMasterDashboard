import * as routes from '../constants/routes';
import {
  deleteHelper,
  getHelper,
  postHelper,
  putHelper,
  postHelperOctet,
} from '../utils/fetchHelper';

class StockService {
  getFoodStockById = (id) => {
    const route = `${routes.STOCK}/${id}`;
    return getHelper(route);
  };

  getFoodStockByFood = (foodId) => {
    const route = `${routes.STOCK}${routes.FOOD}/${foodId}`;

    return getHelper(route);
  };

  getAllStock = () => getHelper(routes.STOCK);

  getStockItemById = (id) => {
    const route = `${routes.STOCK_ITEM}/${id}`;
    return getHelper(route);
  };

  addToStock = (foodId, stockItem) => {
    const route = `${routes.STOCK_ITEM}${routes.FOOD}/${foodId}`;
    return postHelper(route, stockItem);
  };

  updateStockItem = (stockItem) => putHelper(routes.STOCK_ITEM, stockItem);

  deleteStock = (stockId) => deleteHelper(`${routes.STOCK}/${stockId}`);

  deleteStockItem = (stockItemId) => deleteHelper(`${routes.STOCK_ITEM}/${stockItemId}`);

  parseReceipt = (base64) => postHelperOctet(routes.AZURE, base64);
}

const singleton = new StockService();

export default singleton;

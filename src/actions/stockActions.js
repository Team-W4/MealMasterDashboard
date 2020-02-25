import { stockActionTypes as actionTypes } from '../constants/actionTypes';
import { StockService } from '../services';

export const clearStockDetails = () => ({
  type: actionTypes.CLEAR_STOCK_DETAILS,
});

export const clearStockItemDetails = () => ({
  type: actionTypes.CLEAR_STOCK_ITEM_DETAILS,
});

const receiveStockItem = (stockItem) => ({
  type: actionTypes.RECEIVE_STOCK_ITEM,
  stockItem,
});

const receiveFoodStock = (foodStock) => ({
  type: actionTypes.RECEIVE_FOOD_STOCK,
  foodStock,
});

const receiveStock = (foodStocks) => ({
  type: actionTypes.RECEIVE_STOCK,
  foodStocks,
});

export const getAllStock = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_FOOD_STOCK });

  StockService.getAllStock().then(
    (foodStocks) => dispatch(receiveStock(foodStocks)),
  );
};

export const getFoodStockByFood = (foodId) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_FOOD_STOCK });

  StockService.getFoodStockByFood(foodId).then(
    (foodStock) => dispatch(receiveFoodStock(foodStock)),
  );
};

export const getFoodStockById = (stockId) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_FOOD_STOCK });

  StockService.getFoodStockById(stockId).then(
    (foodStock) => dispatch(receiveFoodStock(foodStock)),
  );
};

export const getStockItemById = (stockItemId) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_STOCK_ITEM });

  StockService.getStockItemById(stockItemId).then(
    (stockItem) => dispatch(receiveStockItem(stockItem)),
  );
};

export const addToStock = (foodId, stockItem) => (dispatch) => {
  dispatch({ type: actionTypes.CREATE_STOCK_ITEM });

  StockService.addToStock(foodId, stockItem).then(() => {
    dispatch(getFoodStockByFood(foodId));
  });
};

export const updateStockItem = (stockItemData) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_STOCK_ITEM });

  StockService.updateStockItem(stockItemData).then(
    (stockItem) => dispatch(receiveStockItem(stockItem)),
  );
};

export const deleteStockItem = (stockItemId) => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_STOCK_ITEM });
  StockService.deleteStockItem(stockItemId)
    .then(() => {
      dispatch({ type: actionTypes.DELETE_STOCK_ITEM_SUCCESS });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: actionTypes.DELETE_STOCK_ITEM_FAIL });
    });
};

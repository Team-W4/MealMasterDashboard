import { stockActionTypes as actionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils';

const initialState = {
  foodStocks: [],
  stockItemDetails: {},
  foodStockDetails: {},
  isFetching: false,
  receiptFoodIds: [],
  isFetchingReceiptFoods: false,
};

const StockReducer = createReducer(initialState, {
  [actionTypes.FETCH_STOCK_ITEM]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.FETCH_FOOD_STOCK]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.FETCH_STOCK]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.RECEIVE_STOCK_ITEM]: (state, { stockItem }) => ({
    ...state,
    isFetching: false,
    stockItemDetails: stockItem,
  }),
  [actionTypes.RECEIVE_FOOD_STOCK]: (state, { foodStock }) => ({
    ...state,
    isFetching: false,
    foodStockDetails: foodStock,
  }),
  [actionTypes.RECEIVE_STOCK]: (state, { foodStocks }) => ({
    ...state,
    isFetching: false,
    foodStocks,
  }),
  [actionTypes.CREATE_STOCK_ITEM]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.UPDATE_STOCK_ITEM]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.DELETE_STOCK_ITEM]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [actionTypes.DELETE_STOCK_ITEM_FAIL]: (state) => ({
    ...state,
    isFetching: false,
  }),
  [actionTypes.DELETE_STOCK_ITEM_SUCCESS]: (state) => ({
    ...state,
    isFetching: false,
  }),
  [actionTypes.CLEAR_STOCK_DETAILS]: (state) => ({
    ...state,
    foodStockDetails: {},
  }),
  [actionTypes.CLEAR_STOCK_ITEM_DETAILS]: (state) => ({
    ...state,
    stockItemDetails: {},
  }),
  // TODO: move to GenericFoodReducer when GF gets merged
  [actionTypes.FETCH_RECEIPT_FOODS]: (state) => ({
    ...state,
    isFetchingReceiptFoods: true,
  }),
  [actionTypes.RECEIVE_RECEIPT_FOODS]: (state, { parsedFoodIds }) => ({
    ...state,
    isFetchingReceiptFoods: false,
    receiptFoodIds: parsedFoodIds,
  }),
  [actionTypes.FETCH_RECEIPT_FOODS_FAIL]: (state) => ({
    ...state,
    isFetchingReceiptFoods: false,
  }),
});

export default StockReducer;

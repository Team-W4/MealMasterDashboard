import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StockDetails, StockItem } from '../../../constants/dataTypes';
import { stockActions } from '../../../actions';
import { AuthNavigationProps } from '../../auths/AuthStack';
import StockDetailsPage from '../components/StockDetailsPage';

type Props = AuthNavigationProps<'StockDetails'> & {
  stockDetails: StockDetails;
  stockItemDetails: StockItem;
  getFoodStockByFood: (foodId: number) => void;
  getFoodStockById: (stockId: number) => void;
  getStockItemById: (stockItemId: number) => void;
  addToStock: (foodId: number, stockItem: StockItem) => void;
  updateStockItem: (stockItem: StockItem) => void;
  deleteStockitem: (stockItemId: number) => void;
};

class StockDetailsContainer extends React.Component<Props> {
  public componentDidMount(): void {
    this.refresh();
  }

  public refresh(): void {
    const {
      route: {
        params: { stockId, foodId },
      },
      getFoodStockByFood,
      getFoodStockById,
    } = this.props;

    if (stockId) {
      getFoodStockById(stockId);
    } else if (foodId) {
      getFoodStockByFood(foodId);
    }
  }

  public render(): JSX.Element {
    const {
      route: {
        params: { foodId },
      },
      navigation,
      getStockItemById,
      addToStock,
      updateStockItem,
      deleteStockitem,
      stockDetails,
      stockItemDetails,
    } = this.props;

    return (
      <StockDetailsPage
        editMode={ !!foodId }
        onBack={ () => navigation.pop(1) }
        onRefresh={ () => this.refresh() }
        onMoreDetails={ () => navigation.navigate('FoodDetails', { foodId: stockDetails.food.id }) }
        onItemClick={ getStockItemById }
        onAdd={ (stockItem: StockItem) => addToStock(stockDetails.food.id, stockItem) }
        onUpdate={ updateStockItem }
        onDelete={ deleteStockitem }
        stockDetails={ stockDetails }
        stockItemDetails={ stockItemDetails }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  stockDetails: state.stock.foodStockDetails,
  stockItemDetails: state.stock.stockItemDetails,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      getFoodStockByFood: stockActions.getFoodStockByFood,
      getFoodStockById: stockActions.getFoodStockById,
      getStockItemById: stockActions.getStockItemById,
      addToStock: stockActions.addToStock,
      updateStockItem: stockActions.updateStockItem,
      deleteStockitem: stockActions.deleteStockItem,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockDetailsContainer);

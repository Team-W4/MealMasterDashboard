import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { LayoutAnimation } from 'react-native';
// @ts-ignore
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { StockDetails, StockItem } from '../../../constants/dataTypes';
import { stockActions } from '../../../actions';
import { AuthStackParamList } from '../../auths/AuthStack';
import StockDetailsPage from '../components/StockDetailsPage';

type Props = {
  stockDetails: StockDetails;
  stockItemDetails: StockItem;
  navigation: StackNavigationProp<AuthStackParamList, 'StockDetails'>;
  route: RouteProp<AuthStackParamList, 'StockDetails'>;
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
        params: { stockId },
      },
      getFoodStockById,
    } = this.props;

    getFoodStockById(stockId);
  }

  public render(): JSX.Element {
    const {
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
        onBack={ () => navigation.pop(1) }
        onRefresh={ () => this.refresh() }
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

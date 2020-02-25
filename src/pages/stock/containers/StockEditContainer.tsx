import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { stockActions } from '../../../actions';
import { AuthStackParamList } from '../../auths/AuthStack';
import { StockItem } from '../../../constants/dataTypes';
import StockEditForm from '../components/StockEditForm';

type Props = {
  foodId: number;
  stockItemDetails: StockItem;
  navigation: StackNavigationProp<AuthStackParamList, 'StockEdit'>;
  route: RouteProp<AuthStackParamList, 'StockEdit'>;
  getStockItemById: (stockItemId: number) => void;
  addToStock: (foodId: number, stockItem: StockItem) => void;
  updateStockItem: (stockItem: StockItem) => void;
};

class StockEditContainer extends React.Component<Props> {
  private willFocusSubscription!: () => void;

  public componentDidMount(): void {
    const { navigation } = this.props;

    this.refresh();
    this.willFocusSubscription = navigation.addListener(
      'focus',
      () => this.refresh,
    );
  }

  public componentWillUnmount(): void {
    const { navigation } = this.props;
    navigation.removeListener('focus', this.willFocusSubscription);
  }

  public refresh(): void {
    const {
      route: { params },
      getStockItemById,
    } = this.props;

    if (params && params.stockItemId) {
      getStockItemById(params.stockItemId);
    }
  }


  public render(): JSX.Element {
    const {
      navigation,
      addToStock,
      updateStockItem,
      foodId,
      stockItemDetails,
    } = this.props;

    return (
      <StockEditForm
        onBack={ () => navigation.pop(1) }
        onAddStock={ (stockItem: StockItem) => addToStock(foodId, stockItem) }
        onUpdateStock={ updateStockItem }
        stockItemDetails={ stockItemDetails }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  foodId: state.stock.foodStockDetails.food.id,
  stockItemDetails: state.stock.stockItemDetails,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      getStockItemById: stockActions.getStockItemById,
      addToStock: stockActions.addToStock,
      updateStockItem: stockActions.updateStockItem,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockEditContainer);

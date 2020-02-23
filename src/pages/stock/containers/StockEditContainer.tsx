import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { stockActions } from '../../../actions';
import { AuthStackParamList } from '../../auths';
import { StockItem } from '../../../constants/dataTypes';
import StockEditForm from '../components/StockEditForm';

type Props = {
  stockItemDetails?: any;
  navigation: StackNavigationProp<AuthStackParamList, 'StockEdit'>;
  route: RouteProp<AuthStackParamList, 'StockEdit'>;
  getStockItemById: (stockId: number) => void;
	addToStock: (foodId: number, quantity: number) => void;
  updateStockItem: (stockItem: StockItem) => void;
  clearStockItemDetails: () => void;
};

class StockEditContainer extends React.Component<Props> {
  public componentDidMount(): void {
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
      clearStockItemDetails,
      stockItemDetails,
    } = this.props;

    return (
      <StockEditForm
        onBack={() => {
          clearStockItemDetails();
          navigation.pop(1);
        }}
        onAddStock={addToStock}
        onUpdateStock={updateStockItem}
        stockItemDetails={stockItemDetails}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  stockItemDetails: state.stock.stockItemDetails,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getStockItemById: stockActions.getStockItemById,
      addToStock: stockActions.addToStock,
      updateStockItem: stockActions.updateStockItem,
      clearStockItemDetails: stockActions.clearStockItemDetails,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockEditContainer);

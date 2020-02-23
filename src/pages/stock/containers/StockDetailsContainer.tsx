import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { stockActions } from '../../../actions';
import { AuthStackParamList } from '../../auths';
import StockDetailsPage from '../components/StockDetailsPage';

type Props = {
  stockDetails?: any;
  navigation: StackNavigationProp<AuthStackParamList, 'StockDetails'>;
  route: RouteProp<AuthStackParamList, 'StockDetails'>;
  getFoodStockById: (stockId: number) => void;
  clearStockDetails: () => void;
};

class StockDetailsContainer extends React.Component<Props> {
  public componentDidMount(): void {
    const {
      route: {
        params: { stockId },
      },
      getFoodStockById,
    } = this.props;

    getFoodStockById(stockId);
  }

  public render(): JSX.Element {
    const { navigation, stockDetails, clearStockDetails } = this.props;

    return (
      <StockDetailsPage
        onBack={() => {
          clearStockDetails();
          navigation.pop(1);
        }}
        onAddEdit={(params?: any) => navigation.push('StockEdit', params)}
        stockDetails={stockDetails}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  stockDetails: state.stock.foodStockDetails,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getFoodStockById: stockActions.getFoodStockById,
      clearStockDetails: stockActions.clearStockDetails,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockDetailsContainer);

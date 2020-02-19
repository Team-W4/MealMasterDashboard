import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { stockActions } from '../../../actions';
import { AuthStackParamList } from '../../navigator/AuthNavigator';
import StockDetailsPage from '../components/StockDetailsPage';

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, 'StockDetails'>;
  route: RouteProp<AuthStackParamList, 'StockDetails'>;
  stockDetails?: any;
  getFoodStockById: (stockId: number) => void;
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
    const { navigation, stockDetails } = this.props;

    return (
      <StockDetailsPage
        onBack={() => navigation.goBack()}
        stockDetails={stockDetails}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  stockDetails: state.stocks.stockDetails,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getFoodStockById: stockActions.getFoodStockById,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockDetailsContainer);

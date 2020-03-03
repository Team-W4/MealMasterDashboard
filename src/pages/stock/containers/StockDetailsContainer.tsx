import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { LayoutAnimation } from 'react-native';
// @ts-ignore
import { CustomLayoutSpring } from "react-native-animation-layout";
import { stockActions } from '../../../actions';
import { AuthStackParamList } from '../../auths/AuthStack';
import StockDetailsPage from '../components/StockDetailsPage';

type Props = {
  stockDetails?: any;
  navigation: StackNavigationProp<AuthStackParamList, 'StockDetails'>;
  route: RouteProp<AuthStackParamList, 'StockDetails'>;
  getFoodStockById: (stockId: number) => void;
};

class StockDetailsContainer extends React.Component<Props> {
  private willFocusSubscription!: () => void;

  public componentDidMount(): void {
    const { navigation } = this.props;

    this.refresh();
    this.willFocusSubscription = navigation.addListener('focus', () => this.refresh());
  }

  public componentWillUnmount(): void {
    const { navigation } = this.props;
    navigation.removeListener('focus', this.willFocusSubscription);
  }

  public refresh(): void {
    const {
      route: {
        params: { stockId },
      },
      getFoodStockById,
    } = this.props;

    getFoodStockById(stockId);

    LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
  }

  public render(): JSX.Element {
    const { navigation, stockDetails } = this.props;

    return (
      <StockDetailsPage
        onBack={ () => navigation.pop(1) }
        onAddEdit={ (params?: any) => navigation.push('StockEdit', params) }
        stockDetails={ stockDetails }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  stockDetails: state.stock.foodStockDetails,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      getAllStock: stockActions.getAllStock,
      getFoodStockById: stockActions.getFoodStockById,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockDetailsContainer);

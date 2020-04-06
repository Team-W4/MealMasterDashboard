import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LayoutAnimation } from 'react-native';
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { dateParser } from '../../../utils';
import { stockActions } from '../../../actions';
import { HomeNavigationProps } from '../../navigator/HomeTab';
import { AuthNavigationProps } from '../../auths/AuthStack';
import { Stock } from '../../../constants/dataTypes';
import { Box } from '../../../components/Containers';
import StockListCard from '../components/StockListCard';
import ScrollList from '../../../components/ScrollList';

export type Props = HomeNavigationProps<'Stocks'>
  & AuthNavigationProps<'Home'>
  & {
    foodStocks: Array<Stock>;
    getAllStock: () => void;
  };

class StockListPage extends React.Component<Props> {
  private willFocusSubscription!: () => void;

  public componentDidMount(): void {
    const { navigation } = this.props;

    this.refresh();
    this.willFocusSubscription = navigation.addListener('focus', () => this.refresh());
  }

  public componentDidUpdate(prevProps: Props): void {
    const { foodStocks } = this.props;
    const { foodStocks: prevStocks } = prevProps;

    if (foodStocks !== prevStocks) {
      LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
    }
  }

  public componentWillUnmount(): void {
    const { navigation } = this.props;
    navigation.removeListener('focus', this.willFocusSubscription);
  }

  public refresh(): void {
    const { getAllStock } = this.props;
    getAllStock();
  }

  public render(): JSX.Element {
    const { foodStocks, navigation } = this.props;

    return (
      <ScrollList>
        {(foodStocks || [])
          .sort(
            (a, b) => dateParser(a.nextExpiration).getTime()
              - dateParser(b.nextExpiration).getTime(),
          )
          .map((item: Stock) => (
            <Box key={ item.id } px="l" mb="xl">
              <StockListCard
                data={ item }
                onPress={ () => navigation.push('StockDetails', { stockId: item.id }) }
              />
            </Box>
          ))}
      </ScrollList>
    );
  }
}

const mapStateToProps = (state: any) => ({
  foodStocks: state.stock.foodStocks,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      getAllStock: stockActions.getAllStock,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockListPage);

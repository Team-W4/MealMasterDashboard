import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { HomeTabParamList } from '../../navigator/HomeNavigator';
import { stockActions } from '../../../actions';
import { Stock } from '../../../constants/dataTypes';
import Box from '../../../components/Containers/Box';
import StockListCard from '../components/StockListCard';
import ScrollList from '../../../components/ScrollList';

export type Props = {
  navigation: MaterialBottomTabNavigationProp<HomeTabParamList, 'Stocks'>;
  foodStocks: Array<Stock>;
  getAllStock: () => void;
};

class StockListPage extends React.Component<Props> {
  public componentDidMount(): void {
    const { getAllStock } = this.props;
    getAllStock();
  }

  public render(): JSX.Element {
    const { foodStocks, navigation } = this.props;

    return (
      <ScrollList>
        {(foodStocks || []).map((item, index) => (
          <Box key={index} px="l" mb="xl">
            <StockListCard
              imageURI="https://www.chiceats.com/sites/default/files/styles/image_1024x768/public/recipe/photo/homemade-pasta-recipe-1080x810@2x.jpg"
              title={item.food.name}
              // tag={(item.tags || [])[0].name}
              nextExpiration={item.nextExpiration}
              quantity={item.totalQuantity}
              onPress={() =>
                navigation.push('StockDetails', { stockId: item.id })
              }
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

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getAllStock: stockActions.getAllStock,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockListPage);

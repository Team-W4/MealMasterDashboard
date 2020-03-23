import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { genericFoodActions } from '../../../actions';
import { AuthNavigationProps } from '../../auths/AuthStack';
import FoodDetailsPage from '../components/FoodDetailsPage';

type Props = AuthNavigationProps<'FoodDetails'> & {
  foodDetails?: any;
  nutrition?: any;
  getGenericFoodById: (id: number) => void;
};

class FoodDetailsContainer extends React.Component<Props> {
  public componentDidMount(): void {
    const {
      route: {
        params: { foodId },
      },
      getGenericFoodById,
    } = this.props;
    getGenericFoodById(foodId);
  }

  public render(): JSX.Element {
    const { navigation, foodDetails, nutrition } = this.props;

    return (
      <FoodDetailsPage
        onAdd={ () => navigation.navigate('StockDetails', { foodId: foodDetails.id }) }
        foodDetails={ foodDetails }
        nutrition={ nutrition }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  foodDetails: state.food.foodDetails,
  nutrition: [{ name: "Carbs", value: 4 }, { name: "Protein", value: 6.5 }, { name: "Fat", value: 12.3 }],
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      getGenericFoodById: genericFoodActions.getGenericFoodById,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodDetailsContainer);

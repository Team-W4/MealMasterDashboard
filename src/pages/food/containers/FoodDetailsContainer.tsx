import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { genericFoodActions } from '../../../actions';
import { AuthNavigationProps } from '../../auths/AuthStack';
import FoodDetailsPage from '../components/FoodDetailsPage';

type Props = AuthNavigationProps<'FoodDetails'> & {
  foodDetails?: any;
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
    const { navigation, foodDetails } = this.props;

    return (
      <FoodDetailsPage
        onBack={ () => {
          navigation.pop(1);
        } }
        foodDetails={ foodDetails }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  foodDetails: state.food.foodDetails,
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

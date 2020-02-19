import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { recipeActions } from '../../../actions';
import { AuthStackParamList } from '../../navigator/AuthNavigator';
import RecipeDetailsPage from '../components/RecipeDetailsPage';

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, 'RecipeDetails'>;
  route: RouteProp<AuthStackParamList, 'RecipeDetails'>;
  recipeDetails?: any;
  getRecipeById: (id: number) => void;
};

class RecipeDetailsContainer extends React.Component<Props> {
  public componentDidMount(): void {
    const {
      route: {
        params: { recipeId },
      },
      getRecipeById,
    } = this.props;
    getRecipeById(recipeId);
  }

  public render(): JSX.Element {
    const { navigation, recipeDetails } = this.props;

    return (
      <RecipeDetailsPage
        onBack={() => navigation.goBack()}
        recipeDetails={recipeDetails}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  recipeDetails: state.recipe.recipeDetails,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getRecipeById: recipeActions.getRecipeById,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeDetailsContainer);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { recipeActions } from '../../../actions';
import { AuthStackParamList } from '../../auths/AuthStack';
import RecipeDetailsPage from '../components/RecipeDetailsPage';

type Props = {
  recipeDetails?: any;
  navigation: StackNavigationProp<AuthStackParamList, 'RecipeDetails'>;
  route: RouteProp<AuthStackParamList, 'RecipeDetails'>;
  getRecipeById: (id: number) => void;
  clearRecipeDetails: () => void;
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
    const { navigation, recipeDetails, clearRecipeDetails } = this.props;

    return (
      <RecipeDetailsPage
        onBack={ () => {
          clearRecipeDetails();
          navigation.pop(1);
        } }
        recipeDetails={ recipeDetails }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  recipeDetails: state.recipe.recipeDetails,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      getRecipeById: recipeActions.getRecipeById,
      clearRecipeDetails: recipeActions.clearRecipeDetails,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeDetailsContainer);

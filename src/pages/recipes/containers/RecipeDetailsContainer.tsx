import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { recipeActions } from '../../../actions';
import RecipeDetailsPage from '../components/RecipeDetailsPage';

type Props = {
  navigation: any;
  route: any;
  recipeDetails?: any;
  getRecipeById: (id: number) => void;
};

type State = {};

class RecipeDetailsContainer extends React.Component<Props, State> {
  public componentDidMount(): void {
    const {
      route: {
        params: { id },
      },
      getRecipeById,
    } = this.props;
    getRecipeById(id);
  }

  public render(): JSX.Element {
    const {
      navigation,
      route: {
        params: { id },
      },
      recipeDetails,
    } = this.props;

    return (
      <RecipeDetailsPage
        id={id}
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

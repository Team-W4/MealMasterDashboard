import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { recipeActions } from '../../../actions';
import RecipeDetailsPage from '../components/RecipeDetailsPage';
import { View } from 'react-native';

type Props = {
  id: number;
  recipeDetails: any;
};

type State = {};

class RecipeDetailsContainer extends React.Component<Props, State> {
  public componentDidMount(): void {
    const { id } = this.props;
    this.props.actions.getRecipeById(id);
  }

  public render(): JSX.Element {
    const { id, recipeDetails } = this.props;

    return true ? (
      <RecipeDetailsPage id={id} recipeDetails={recipeDetails} />
    ) : (
      //TODO: Adds loading here
      <View />
    );
  }
}

const mapStateToProps = (state: any) => ({
  recipeDetails: state.recipe.recipeDetails,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(recipeActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeDetailsContainer);

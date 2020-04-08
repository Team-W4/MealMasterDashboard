import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recipeActions } from '../../../actions';
import { User, RecipeDetails } from '../../../constants/dataTypes';
import { AuthNavigationProps } from '../../auths/AuthStack';
import RecipeDetailsPage from '../components/RecipeDetailsPage';

type Props = AuthNavigationProps<'RecipeDetails'> & {
  userId: number;
  recipeDetails: RecipeDetails;
  getRecipeById: (id: number) => void;
  likeRecipe: (recipeId: number) => void;
  unlikeRecipe: (recipeId: number) => void;
  clearRecipeDetails: () => void;
};

class RecipeDetailsContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.getFavorited = this.getFavorited.bind(this);
  }

  public componentDidMount(): void {
    const {
      route: {
        params: { recipeId },
      },
      getRecipeById,
    } = this.props;

    getRecipeById(recipeId);
  }

  private onFavoriteClick(): void {
    const { likeRecipe, unlikeRecipe, recipeDetails: { id } } = this.props;
    const favorited = this.getFavorited();

    if (favorited) {
      unlikeRecipe(id);
    } else {
      likeRecipe(id);
    }
  }

  private getFavorited(): boolean {
    const { userId, recipeDetails: { savedByUsers } } = this.props;

    if (userId && savedByUsers && savedByUsers.length > 0) {
      return savedByUsers.some((user: User) => user.id === userId);
    }

    return false;
  }

  public render(): JSX.Element {
    const { navigation, recipeDetails, clearRecipeDetails } = this.props;

    return (
      <RecipeDetailsPage
        favorited={ this.getFavorited() }
        recipeDetails={ recipeDetails }
        onFavorite={ this.onFavoriteClick }
        onBack={ () => {
          clearRecipeDetails();
          navigation.pop(1);
        } }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  recipeDetails: state.recipe.recipeDetails,
  userId: state.user.profile.id,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      getRecipeById: recipeActions.getRecipeById,
      clearRecipeDetails: recipeActions.clearRecipeDetails,
      likeRecipe: recipeActions.likeRecipe,
      unlikeRecipe: recipeActions.unlikeRecipe,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeDetailsContainer);

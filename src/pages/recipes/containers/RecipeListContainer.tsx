import React from 'react';
import { LayoutAnimation } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { HomeNavigationProps } from '../../navigator/HomeTab';
import { recipeActions } from '../../../actions';
import { Recipe } from '../../../constants/dataTypes';
import { Box } from '../../../components/Containers';
import ScrollList from '../../../components/ScrollList';
import RecipeCard from '../components/RecipeCard';

export type Props = HomeNavigationProps<'Recipes'>
  & {
  userId: number;
  recipes: Array<Recipe>;
  getRecipesByUser: (id: number) => void;
};

class RecipeListPage extends React.Component<Props> {
  public componentDidMount(): void {
    const { userId, getRecipesByUser } = this.props;
    getRecipesByUser(userId);

    LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
  }

  public render(): JSX.Element {
    const { recipes, navigation } = this.props;

    return (
      <ScrollList>
        {(recipes || []).map((item: Recipe) => (
          <Box key={ item.id } px="l" mb="xl">
            <RecipeCard
              data={ item }
              onPress={ () => navigation.push('RecipeDetails', { recipeId: item.id }) }
            />
          </Box>
        ))}
      </ScrollList>
    );
  }
}

const mapStateToProps = (state: any) => ({
  userId: state.user.userToken,
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      getRecipesByUser: recipeActions.getRecipesByUser,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeListPage);

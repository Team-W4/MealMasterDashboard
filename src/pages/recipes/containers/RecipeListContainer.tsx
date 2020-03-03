import React from 'react';
import { LayoutAnimation } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// @ts-ignore
import { CustomLayoutSpring } from "react-native-animation-layout";
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { HomeTabParamList } from '../../navigator/HomeTab';
import { recipeActions } from '../../../actions';
import { Recipe } from '../../../constants/dataTypes';
import Box from '../../../components/Containers/Box';
import ScrollList from '../../../components/ScrollList';
import RecipeCard from '../components/RecipeCard';

export type Props = {
  navigation: MaterialBottomTabNavigationProp<HomeTabParamList, 'Recipes'>;
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
          <Box key={ item.name } px="l" mb="xl">
            <RecipeCard
              title={ item.name }
              tag={ item.tags && item.tags.length > 0 ? item.tags[0].name : '' }
              // TODO: Adds image & difficulty
              imageURI="https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg"
              duration={ item.cookTime }
              difficulty="Easy"
              quantity={ item.yield }
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

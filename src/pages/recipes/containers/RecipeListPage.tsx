import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { HomeTabParamList } from '../../navigator/HomeNavigator';
import { recipeActions } from '../../../actions';
import Box from '../../../components/Containers/Box';
import ScrollList from '../../../components/ScrollList';
import RecipeCard from '../components/RecipeCard';

export type Props = {
  navigation: MaterialBottomTabNavigationProp<HomeTabParamList, 'Recipes'>;
  userId: number;
  recipes: Array<any>;
  getRecipesByUser: (id: number) => void;
};

class RecipeListPage extends React.Component<Props> {
  public componentDidMount(): void {
    const { userId, getRecipesByUser } = this.props;
    getRecipesByUser(userId);
  }

  public render(): JSX.Element {
    const { recipes, navigation } = this.props;

    return (
      <ScrollList>
        {(recipes || []).map((item, index) => (
          <Box key={index} mb="xl" mx="m">
            <RecipeCard
              title={item.name}
              tag={item.tags[0].name}
              // TODO: Adds image & difficulty
              imageURI="https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg"
              duration={item.cookTime}
              difficulty="Easy"
              quantity={item.yield}
              onPress={() =>
                navigation.navigate('RecipeDetails', { recipeId: item.id })
              }
            />
          </Box>
        ))}
      </ScrollList>
    );
  }
}

const mapStateToProps = (state: any) => ({
  userId: state.user.profile.id,
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getRecipesByUser: recipeActions.getRecipesByUser,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeListPage);

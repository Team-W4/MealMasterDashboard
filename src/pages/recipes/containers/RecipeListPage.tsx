import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '../../../styled';
import { recipeActions } from '../../../actions';
import Box from '../../../components/Containers/Box';
import RecipeCard from '../components/RecipeCard';

const StyledScrollList = styled.ScrollView`
  padding-top: ${({ theme: { space } }) => space.m}
  padding-bottom: ${({ theme: { space } }) => space.m}
  padding-left: ${({ theme: { space } }) => space.xxxl};
  padding-right: ${({ theme: { space } }) => space.xxxl};
  width: 100%;
`;

export type Props = {
  navigation: any;
  userId: number;
  recipes: Array<any>;
  getRecipesByUser: (id: number) => void;
};

class RecipeListPage extends React.Component<Props> {
  public componentDidMount(): void {
    const { userId } = this.props;
    this.props.getRecipesByUser(userId);
  }

  public render(): JSX.Element {
    const { recipes, navigation } = this.props;

    return (
      <StyledScrollList>
        {(recipes || []).map((item, index) => (
          <Box key={index} mb="xl">
            <RecipeCard
              title={item.name}
              tag={item.tags[0].name}
              // TODO: Adds image & difficulty
              // imageURI={item.uri}
              duration={item.cookTime}
              // difficulty={item.difficulty}
              quantity={item.yield}
              onPress={() =>
                navigation.navigate('RecipeDetails', { id: item.id })
              }
            />
          </Box>
        ))}
      </StyledScrollList>
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

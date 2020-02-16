import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '../../../styled';
import { recipeActions } from '../../../actions';
import RecipeCard from '../components/RecipeCard';
import Box from '../../../components/Containers/Box';

const StyledScrollList = styled.ScrollView`
  padding-top: ${({ theme: { space } }) => space.m}
  padding-bottom: ${({ theme: { space } }) => space.m}
  padding-left: ${({ theme: { space } }) => space.xxxl};
  padding-right: ${({ theme: { space } }) => space.xxxl};
  width: 100%;
`;

export type Props = {
  userId: number;
  recipes: Array<any>;
};

export type States = {
};

class RecipeListPage extends React.Component<Props, States> {
  public componentDidMount(): void {
    const { userId } = this.props;
    this.props.actions.getRecipesByUser(userId);
  }

  public render(): JSX.Element {
    const { recipes } = this.props;

    return (
      <StyledScrollList>
        {recipes.map((item, index) => (
          <Box key={index} mb="xl">
            <RecipeCard
              title={item.name}
              tag={item.tags[0].name}
              // TODO: Adds image & difficulty
              // imageURI={item.uri}
              duration={item.cookTime}
              // difficulty={item.difficulty}
              quantity={item.yield}
            />
          </Box>
        ))}
      </StyledScrollList>
    );
  }
}

const mapStateToProps = (state: any) => ({
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(recipeActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeListPage);

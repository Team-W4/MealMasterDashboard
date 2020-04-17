import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recipeActions } from '../../actions';
import { Recipe } from '../../constants/dataTypes';
import { HomeNavigationProps } from '../navigator/HomeTab';
import { Box, Grid } from '../../components/Containers';
import { Heading } from '../../components/Texts';
import { SavedIcon } from '../../components/Icons';
import SwipeStack from '../../components/SwipeStack';
import RecipeRecCard from './components/RecipeRecCard';

export type Props = HomeNavigationProps<'Home'> & {
  recipeRecs: Array<Recipe>;
  getRecipeRecommendations: () => void;
};

const HomePage: React.FC<Props> = ({
  navigation, recipeRecs, getRecipeRecommendations,
}) => {
  useEffect(() => getRecipeRecommendations(), []);

  return (
    <Box px="l" flexGrow={ 1 } alignItems="center" justifyContent="center">
      <Grid mt="l" mb="xl" alignItems="center">
        <SavedIcon wrapperVariant="warning" />
        <Heading ml="m">Recipes For You Today</Heading>
      </Grid>
      {
        recipeRecs && recipeRecs.length > 0 && (
          <SwipeStack
            data={ recipeRecs }
            keyExtractor={ (item: Recipe) => item.id.toString() }
            renderItem={ (item: Recipe) => (
              <RecipeRecCard
                data={ item }
                onPress={ () => navigation.push('RecipeDetails', { recipeId: item.id }) }
              />
            ) }
          />
        )
      }
    </Box>
  );
};

const mapStateToProps = (state: any) => ({
  recipeRecs: state.recipe.recipeRecs,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      getRecipeRecommendations: recipeActions.getRecipeRecommendations,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

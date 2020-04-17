import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recipeActions } from '../../actions';
import { User, Recipe } from '../../constants/dataTypes';
import { HomeNavigationProps } from '../navigator/HomeTab';
import { Box, Grid } from '../../components/Containers';
import { SavedIcon } from '../../components/Icons';
import { Heading } from '../../components/Texts';
import SwipeStack from '../../components/SwipeStack';
import RecipeRecCard from '../discover/components/RecipeRecCard';

export type Props = HomeNavigationProps<'Home'> & {
  profile: User;
  recipeRecs: Array<Recipe>;
  getRecipeRecommendations: () => void;
};

const HomePage: React.FC<Props> = ({
  navigation, profile, recipeRecs, getRecipeRecommendations,
}) => {
  useEffect(() => getRecipeRecommendations(), []);

  return (
    <Box px="l" flexGrow={ 1 } alignItems="center">
      <Grid mt="l" mb="xl" alignItems="center">
        <SavedIcon wrapperVariant="warning" />
        <Heading ml="s">{`For You Today, ${profile.firstName}`}</Heading>
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
  profile: state.user.profile,
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

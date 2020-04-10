import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LayoutAnimation } from 'react-native';
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { searchActions } from '../../../actions';
import { GenericFood, Recipe } from '../../../constants/dataTypes';
import { DrawerCard } from '../../../components/Cards';
import {
  SafeView, Box, Grid, Column,
} from '../../../components/Containers';
import { IconButton } from '../../../components/Buttons';
import { Title } from '../../../components/Texts';
import { CheckIcon, EatIcon } from '../../../components/Icons';
import DataList from '../../../components/DataList';
import SearchInput from '../../search/components/SearchInput';
import FoodSearchListCard from '../../search/components/FoodSearchListCard';
import RecipeSearchListCard from '../../search/components/RecipeSearchListCard';

export type Props = {
  foods?: Array<GenericFood>;
  recipes?: Array<Recipe>;
  onSearchFood: (term: string) => void;
  onSearchRecipe: (term: string) => void;
};

const ConsumeReview: React.FC<Props> = ({
  foods,
  recipes,
  onSearchFood,
  onSearchRecipe,
}) => {
  const prevSearch = useRef<string>();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (prevSearch.current !== searchTerm) {
      prevSearch.current = searchTerm;
      onSearchFood(searchTerm);
      onSearchRecipe(searchTerm);

      LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
    }
  }, [searchTerm]);

  return (
    <SafeView full side="bottom">
      <Column backgroundColor="athensgray" />
      <DrawerCard
        topRightOverlay={ (
          <IconButton variant="warning">
            <CheckIcon variant="inverted" />
          </IconButton>
        ) }
      >
        <Grid my="m" justifyContent="center" alignItems="center">
          <EatIcon wrapperVariant="warning" />
          <Title ml="m">Your Intakes</Title>
        </Grid>
        <Box>
          <SearchInput
            focusOnMount
            value={ searchTerm }
            onClear={ () => {
              setSearchTerm('');
            } }
            onChangeText={ (e: string) => setSearchTerm(e) }
          />
          {
            recipes && recipes.length > 0 && (
              <>
                <Title px="l">Recipes</Title>
                {/*
                // @ts-ignore */}
                <DataList
                  data={ recipes }
                  keyExtractor={ (item: Recipe) => item.id.toString() }
                  renderItem={ ({ item }: { item: Recipe }) => (
                    <Box key={ item.name } px="l" py="xs">
                      <RecipeSearchListCard
                        data={ item }
                        onPress={ () => {} }
                      />
                    </Box>
                  ) }
                />
              </>
            )
          }
          {
            foods && foods.length > 0 && (
              <>
                <Title px="l">Foods</Title>
                {/*
                // @ts-ignore */}
                <DataList
                  data={ foods }
                  keyExtractor={ (item: GenericFood) => item.id.toString() }
                  renderItem={ ({ item }: { item: GenericFood }) => (
                    <Box key={ item.name } px="l" py="xs">
                      <FoodSearchListCard
                        data={ item }
                      />
                    </Box>
                  ) }
                />
              </>
            )
          }
        </Box>
      </DrawerCard>
    </SafeView>
  );
};

const mapStateToProps = (state: any) => ({
  foods: state.search.foods,
  recipes: state.search.recipes,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      onSearchFood: searchActions.searchFoods,
      onSearchRecipe: searchActions.searchRecipes,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConsumeReview);

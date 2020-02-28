import React from 'react';
import { connect } from 'react-redux';
import { titleHelper } from '../../../utils';
import { Recipe } from '../../../constants/dataTypes';
import Box from '../../../components/Containers/Box';
import SearchResultList from './SearchResultList';
import RecipeSearchListCard from './RecipeSearchListCard';

type Props = {
  data?: Array<Recipe>;
};

const SearchRecipeTab: React.FC<Props> = ({
  data,
}) => (
  <SearchResultList
    data={ data }
    keyExtractor={ (item) => item.id.toString() }
    renderItem={ ({ item }) => (
      <Box key={ item.name } px="l" mb="m">
        <RecipeSearchListCard
          title={ titleHelper(item.name) }
          tag="IDK"
          duration={ item.cookTime }
          difficulty="Easy"
          quantity={ item.yield }
        />
      </Box>
    ) }
  />
);

const mapStateToProps = (state: any) => ({
  data: state.recipe.searchedRecipes,
});

export default connect(
  mapStateToProps,
  null,
)(SearchRecipeTab);

import React from 'react';
import { connect } from 'react-redux';
import { Recipe } from '../../../constants/dataTypes';
import { Box } from '../../../components/Containers';
import { Subtitle } from '../../../components/Texts';
import DataList from '../../../components/DataList';
import RecipeSearchListCard from '../components/RecipeSearchListCard';

type Props = {
  data?: Array<Recipe>;
};

const SearchRecipeTab: React.FC<Props> = ({ data }) => (
  data && data.length > 0 ? (
    // @ts-ignore
    <DataList
      data={ data }
      keyExtractor={ (item: Recipe) => item.id.toString() }
      renderItem={ ({ item }: { item: Recipe }) => (
        <Box key={ item.name } px="l" py="xs">
          <RecipeSearchListCard
            data={ item }
          />
        </Box>
      ) }
    />
  ) : (
    <Subtitle pt="xxxl" mt="xxxl" textAlign="center">
      Hungry? Try searching for &#39bibimbap&#39
    </Subtitle>
  )
);

const mapStateToProps = (state: any) => ({
  data: state.search.recipes,
});

export default connect(
  mapStateToProps,
  null,
)(SearchRecipeTab);

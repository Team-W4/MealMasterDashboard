import React from 'react';
import { connect } from 'react-redux';
import { GenericFood } from '../../../constants/dataTypes';
import Box from '../../../components/Containers/Box';
import SearchResultList from './SearchResultList';
import IngredientSearchListCard from './IngredientSearchListCard';

type Props = {
  data?: Array<GenericFood>;
};

const SearchFoodTab: React.FC<Props> = ({ data }) => (
  <SearchResultList
    data={ data }
    keyExtractor={ (item: GenericFood) => item.id.toString() }
    renderItem={ ({ item }: { item: GenericFood }) => (
      <Box key={ item.name } px="l" mb="m">
        <IngredientSearchListCard title={ item.name } subtitle="produce" />
      </Box>
    ) }
  />
);

const mapStateToProps = (state: any) => ({
  data: state.food.foods,
});

export default connect(
  mapStateToProps,
  null,
)(SearchFoodTab);

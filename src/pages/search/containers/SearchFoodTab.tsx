import React from 'react';
import { connect } from 'react-redux';
import { GenericFood } from '../../../constants/dataTypes';
import { SearchNavigationProps } from '../components/SearchTab';
import { Box } from '../../../components/Containers';
import DataList from '../../../components/DataList';
import FoodSearchListCard from '../components/FoodSearchListCard';

type Props = SearchNavigationProps<'SearchFoods'> & {
  data?: Array<GenericFood>;
};

const SearchFoodTab: React.FC<Props> = ({ navigation, data }) => (
  // @ts-ignore
  <DataList
    data={ data }
    keyExtractor={ (item: GenericFood) => item.id.toString() }
    renderItem={ ({ item }: { item: GenericFood }) => (
      <Box key={ item.name } px="l" mb="m">
        <FoodSearchListCard
          title={ item.name }
          subtitle="produce"
          onAdd={ () => navigation.push('StockDetails', { foodId: item.id }) }
          onPress={ () => navigation.push('FoodDetails', { foodId: item.id }) }
        />
      </Box>
    ) }
  />
);

const mapStateToProps = (state: any) => ({
  data: state.search.foods,
});

export default connect(
  mapStateToProps,
  null,
)(SearchFoodTab);

import React from 'react';
import { connect } from 'react-redux';
import { GenericFood } from '../../../constants/dataTypes';
import { SearchNavigationProps } from '../components/SearchTab';
import { Box } from '../../../components/Containers';
import { Subtitle } from '../../../components/Texts';
import DataList from '../../../components/DataList';
import FoodSearchListCard from '../components/FoodSearchListCard';

type Props = SearchNavigationProps<'SearchFoods'> & {
  data?: Array<GenericFood>;
};

const SearchFoodTab: React.FC<Props> = ({ navigation, data }) => (
  data && data.length > 0 ? (
    // @ts-ignore
    <DataList
      data={ data }
      keyExtractor={ (item: GenericFood) => item.id.toString() }
      renderItem={ ({ item }: { item: GenericFood }) => (
        <Box key={ item.name } px="l" py="xs">
          <FoodSearchListCard
            data={ item }
            onPress={ () => navigation.push('FoodDetails', { foodId: item.id }) }
          />
        </Box>
      ) }
    />
  ) : (
    <Subtitle pt="xxxl" mt="xxxl" textAlign="center">
      Just bought a banana? Add it here.
    </Subtitle>
  )
);

const mapStateToProps = (state: any) => ({
  data: state.search.foods,
});

export default connect(
  mapStateToProps,
  null,
)(SearchFoodTab);

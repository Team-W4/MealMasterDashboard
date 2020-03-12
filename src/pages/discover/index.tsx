import React from 'react';
import styled from '../../styled';
import { HomeNavigationProps } from '../navigator/HomeTab';
import { Box } from '../../components/Containers';
import { Text, Heading } from '../../components/Texts';
import SwipeStack from '../../components/SwipeStack';
import ScrollList from '../../components/ScrollList';
import SearchInput from '../search/components/SearchInput';
import RecipeRecCard from './components/RecipeRecCard';

const SearchEntry = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export type Props = HomeNavigationProps<'Discover'> & {
};


const DiscoverPage: React.FC<Props> = ({ navigation }) => (
  <ScrollList full>
    <SearchInput />
    <SearchEntry onPress={ () => navigation.navigate('Search') } />
    <Box px="l" alignItems="center">
      <Heading mb="xl">Breakfast</Heading>
      <SwipeStack
        data={ ['0', '1', '2', '3', '4', '5'] }
        keyExtractor={ (item) => item }
        renderItem={ (item) => (
          <Box>
            <Text>{item}</Text>
            <RecipeRecCard />
          </Box>
        ) }
      />
    </Box>
  </ScrollList>
);

export default DiscoverPage;

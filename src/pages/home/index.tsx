import React from 'react';
import styled from '../../styled';
import { HomeNavigationProps } from '../navigator/HomeTab';
import { Box } from '../../components/Containers';
import { Text } from '../../components/Texts';
import SwipeStack from '../../components/SwipeStack';
import SearchInput from '../search/components/SearchInput';
import RecipeRecCard from './components/RecipeRecCard';

const SearchEntry = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export type Props = HomeNavigationProps<'Home'> & {
};


const HomePage: React.FC<Props> = ({ navigation }) => (
  <Box flexGrow={ 1 }>
    <SearchInput />
    <SearchEntry onPress={ () => navigation.navigate('Search') } />
    <Box flexGrow={ 1 } px="l" alignItems="center">
      <SwipeStack
        data={ ['0', '1', '2', '3', '4', '5'] }
        renderItem={ (item) => (
          <Box>
            <Text size="large">{item}</Text>
            <RecipeRecCard />
          </Box>
        ) }
      />
    </Box>
  </Box>
);

export default HomePage;

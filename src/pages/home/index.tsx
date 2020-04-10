import React from 'react';
import { Button } from '../../components/Buttons';
import { HomeNavigationProps } from '../navigator/HomeTab';
import { Box } from '../../components/Containers';
import { Text, Heading } from '../../components/Texts';
import SwipeStack from '../../components/SwipeStack';
import ScrollList from '../../components/ScrollList';
import RecipeRecCard from './components/RecipeRecCard';

export type Props = HomeNavigationProps<'Discover'> & {
};

const HomePage: React.FC<Props> = ({ navigation }) => (
  <Box height="100%">
    <Button onPress={ () => navigation.push('ReceiptParse') }>
      <Text>+</Text>
    </Button>
    <ScrollList full>
      <Box px="l" alignItems="center">
        <Heading mb="xl">Recipe Recommendations</Heading>
        <SwipeStack
          data={ [0, 1, 2, 3, 4, 5] }
          keyExtractor={ (item) => item }
          renderItem={ (item) => (
            <Box>
              <Text>{item}</Text>
              <RecipeRecCard recipeId={ (item + 42) } />
            </Box>
          ) }
        />
      </Box>
    </ScrollList>
  </Box>
);

export default HomePage;

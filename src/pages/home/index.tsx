import React from 'react';
import { Box } from '../../components/Containers';
import { Button } from '../../components/Buttons';
import { Text } from '../../components/Texts';

const HomePage: React.FC = ({ navigation }) => (
  <Box height="100%">
    <Button onPress={ () => navigation.push('RecipeEdit') }>
      <Text>+</Text>
    </Button>
  </Box>
);

export default HomePage;

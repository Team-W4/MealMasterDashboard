import React from 'react';
import { Box } from '../../components/Containers';
import { Button } from '../../components/Buttons';
import { Text } from '../../components/Texts';
import { HomeNavigationProps } from '../navigator/HomeTab';
import { AuthNavigationProps } from '../auths/AuthStack';
import { TagInput } from '../../components/Inputs';

export type Props = HomeNavigationProps<'Home'>
  & AuthNavigationProps<'Home'>;

const HomePage: React.FC<Props> = ({ navigation }) => (
  <Box height="100%">
    <Button onPress={ () => navigation.push('RecipeEdit') }>
      <Text>+</Text>
    </Button>
    <TagInput />
  </Box>
);

export default HomePage;

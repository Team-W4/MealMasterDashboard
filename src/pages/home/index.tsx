import React from 'react';
import { Box } from '../../components/Containers';
import { Button } from '../../components/Buttons';
import { Text } from '../../components/Texts';
import { HomeNavigationProps } from '../navigator/HomeTab';
import { AuthNavigationProps } from '../auths/AuthStack';

export type Props = HomeNavigationProps<'Home'>
  & AuthNavigationProps<'Home'>;

const HomePage: React.FC<Props> = ({ navigation }) => (
  <Box height="100%">
    <Button onPress={ () => navigation.push('ReceiptParse') }>
      <Text>+</Text>
    </Button>

    <Box p="xxxl">
      <Box mb="s">
        <Button variant="transparent">
          <Text>Transparent</Text>
        </Button>
      </Box>
      <Box mb="s">
        <Button>
          <Text>Normal</Text>
        </Button>
      </Box>
      <Box mb="s">
        <Button variant="secondary">
          <Text>Secondary</Text>
        </Button>
      </Box>
      <Box mb="s">
        <Button variant="tertiary">
          <Text>Tertiary</Text>
        </Button>
      </Box>
      <Box mb="s">
        <Button variant="warning">
          <Text>Warning</Text>
        </Button>
      </Box>
      <Box mb="s">
        <Button variant="active">
          <Text>Active</Text>
        </Button>
      </Box>
      <Box mb="s">
        <Button variant="error">
          <Text>Error</Text>
        </Button>
      </Box>
      <Box mb="s">
        <Button variant="success">
          <Text>Success</Text>
        </Button>
      </Box>
      <Box mb="s">
        <Button variant="link">
          <Text>Link</Text>
        </Button>
      </Box>
    </Box>
  </Box>
);

export default HomePage;

import React from 'react';
import { Box } from '../../components/Containers';
import { HomeNavigationProps } from '../navigator/HomeTab';

export type Props = HomeNavigationProps<'Home'>;

const HomePage: React.FC<Props> = () => (
  <Box height="100%" />
);

export default HomePage;

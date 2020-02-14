import React from 'react';
import Box from '../../components/Containers/Box';
import Title from '../../components/Texts/Title';
import Today from './Today';
import ProfileImage from './ProfileImage';

export type Props = {
  title: string;
};

const TitleBar = ({ title }: Props): JSX.Element => (
  <Box flexDirection="row" px="xxl" mb="s">
    <Box flexGrow={1}>
      <Title mb="xxs">{title}</Title>
      <Today />
    </Box>
    <Box justifyContent="center">
      <ProfileImage />
    </Box>
  </Box>
);

export default TitleBar;

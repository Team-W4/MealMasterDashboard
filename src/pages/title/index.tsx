import React from 'react';
import Box from '../../components/Containers/Box';
import Grid, { Column } from '../../components/Containers/Grid';
import Title from '../../components/Texts/Title';
import Today from './Today';
import ProfileImage from '../../components/ProfileImage';

export type Props = {
  title: string;
};

const TitleBar: React.FC<Props> = ({ title }) => (
  <Grid mb="s" mt="50px" mx="xxxl">
    <Column>
      <Title mb="xxs">{title}</Title>
      <Today />
    </Column>
    <Box justifyContent="center">
      <ProfileImage rounded />
    </Box>
  </Grid>
);

export default TitleBar;

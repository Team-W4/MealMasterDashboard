import React from 'react';
import { TouchableOpacity } from 'react-native';
import { navigate } from '../navigator/Navigator';
import { properDateHelper } from '../../utils';
import Box from '../../components/Containers/Box';
import Grid, { Column } from '../../components/Containers/Grid';
import Title from '../../components/Texts/Title';
import ProfileImage from '../../components/ProfileImage';
import Subtitle from '../../components/Texts/Subtitle';

export type Props = {
  title: string;
};

const TitleBar: React.FC<Props> = ({ title }) => (
  <Grid mb="s" mt="50px" mx="xxxl">
    <Column>
      <Title mb="xxs">{title}</Title>
      <Subtitle>{properDateHelper(new Date())}</Subtitle>
    </Column>
    <Box justifyContent="center">
      <TouchableOpacity onPress={() => navigate('UserDetails')}>
        <ProfileImage rounded />
      </TouchableOpacity>
    </Box>
  </Grid>
);

export default TitleBar;

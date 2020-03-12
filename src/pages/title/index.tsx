import React from 'react';
import { TouchableOpacity } from 'react-native';
import { navigate } from '../navigator/Navigator';
import { properDateHelper } from '../../utils';
import {
  Box, Grid, Column, SafeView,
} from '../../components/Containers';
import { Title, Subtitle } from '../../components/Texts';
import ProfileImage from '../../components/ProfileImage';

export type Props = {
  title?: string;
};

const greetingsGenerator = (): string => {
  const hour = (new Date()).getHours();
  if (hour < 12) {
    return 'Good Morning! ☀️';
  }

  if (hour < 19) {
    return 'Good Afternoon! 🌤';
  }

  return 'Good Evening! 🌙';
};

const TitleBar: React.FC<Props> = ({ title }) => (
  <SafeView side="top">
    <Grid mx="xxxl">
      <Column>
        <Title mb="xxs">{title || greetingsGenerator()}</Title>
        <Subtitle>{properDateHelper(new Date())}</Subtitle>
      </Column>
      <Box justifyContent="center">
        <TouchableOpacity onPress={ () => navigate('UserDetails') }>
          <ProfileImage rounded />
        </TouchableOpacity>
      </Box>
    </Grid>
  </SafeView>
);

export default TitleBar;

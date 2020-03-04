import React from 'react';
import { TouchableOpacity } from 'react-native';
import { navigate } from '../navigator/Navigator';
import { properDateHelper } from '../../utils';
import Box from '../../components/Containers/Box';
import Grid, { Column } from '../../components/Containers/Grid';
import SafeView from '../../components/SafeView';
import Title from '../../components/Texts/Title';
import ProfileImage from '../../components/ProfileImage';
import Subtitle from '../../components/Texts/Subtitle';

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
  <SafeView>
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

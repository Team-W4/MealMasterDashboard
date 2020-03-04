import React from 'react';
import { ScrollView } from 'react-native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { HomeTabParamList } from '../navigator/HomeTab';
import SearchInput from '../search/components/SearchInput';
import Box from '../../components/Containers/Box';
import styled from '../../styled';

const SearchEntry = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export type Props = {
  navigation: MaterialBottomTabNavigationProp<HomeTabParamList, 'Home'>;
};

const HomePage: React.FC<Props> = ({ navigation }) => (
  <ScrollView>
    <Box>
      <SearchInput />
      <SearchEntry onPress={ () => navigation.navigate('Search') } />
    </Box>
  </ScrollView>
);

export default HomePage;

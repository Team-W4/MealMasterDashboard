import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationProp,
} from '@react-navigation/material-bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../auths/AuthStack';

export type HomeTabParamList = AuthStackParamList & {
  Home: undefined;
  Search: undefined;
  Stocks: undefined;
  Recipes: undefined;
};

export type HomeNavigationProps<T extends keyof HomeTabParamList> = {
  navigation: MaterialBottomTabNavigationProp<HomeTabParamList, T>;
  route: RouteProp<HomeTabParamList, T>;
};

const HomeTab = createMaterialBottomTabNavigator<HomeTabParamList>();

export default HomeTab;

import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationProp,
} from '@react-navigation/material-bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList, AuthNavigationProps } from '../auths/AuthStack';

export type HomeTabParamList = AuthStackParamList & {
  Home: undefined;
  Discover: undefined;
  Stocks: undefined;
  Recipes: undefined;
  AddMenu: undefined;
};

export type HomeNavigationProps<T extends keyof HomeTabParamList> =
  AuthNavigationProps<'Home'>
  & {
    navigation: MaterialBottomTabNavigationProp<HomeTabParamList, T>;
    route: RouteProp<HomeTabParamList, T>;
  };

const HomeTab = createMaterialBottomTabNavigator<HomeTabParamList>();

export default HomeTab;

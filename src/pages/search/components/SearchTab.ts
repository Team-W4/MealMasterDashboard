import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationProp,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';
import { HomeNavigationProps } from '../../navigator/HomeTab';

export type SearchTabParamList = {
  SearchFoods: undefined;
  SearchRecipes: undefined;
  SearchUsers: undefined;
  SearchTags: undefined;
};

export type SearchNavigationProps<T extends keyof SearchTabParamList> =
  HomeNavigationProps<'Discover'>
  & {
    navigation: MaterialTopTabNavigationProp<SearchTabParamList, T>;
    route: RouteProp<SearchTabParamList, T>;
  };

export type SearchTabBarProps = MaterialTopTabBarProps;

const SearchTab = createMaterialTopTabNavigator<SearchTabParamList>();

export default SearchTab;

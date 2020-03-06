import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationProp,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../auths/AuthStack';

export type SearchTabParamList = AuthStackParamList & {
  SearchFoods: undefined;
  SearchRecipes: undefined;
  SearchUsers: undefined;
  SearchTags: undefined;
};

export type SearchNavigationProps<T extends keyof SearchTabParamList> = {
  navigation: MaterialTopTabNavigationProp<SearchTabParamList, T>;
  route: RouteProp<SearchTabParamList, T>;
};

export type SearchTabBarProps = MaterialTopTabBarProps;

const SearchTab = createMaterialTopTabNavigator<SearchTabParamList>();

export default SearchTab;

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AuthStackParamList } from '../auths/AuthStack';

export type HomeTabParamList = AuthStackParamList & {
  Home: undefined;
  Search: undefined;
  Stocks: undefined;
  Recipes: undefined;
};

const HomeTab = createMaterialBottomTabNavigator<HomeTabParamList>();

export default HomeTab;

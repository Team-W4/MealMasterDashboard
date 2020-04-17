import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Loading: undefined;
  Home: undefined;
  RecipeDetails: { recipeId: number };
  RecipeEdit: undefined;
  StockDetails: { stockId?: number, foodId?: number };
  FoodDetails: { foodId: number };
  UserDetails: undefined;
  UserEdit: undefined;
  ReceiptParse: undefined;
  Consume: undefined;
};

export type AuthNavigationProps<T extends keyof AuthStackParamList> = {
  navigation: StackNavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default AuthStack;

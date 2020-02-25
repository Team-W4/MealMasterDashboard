import { createStackNavigator } from '@react-navigation/stack';

export type AuthStackParamList = {
  Login: undefined;
  Loading: undefined;
  Home: undefined;
  RecipeDetails: { recipeId: number };
  StockDetails: { stockId: number };
  StockEdit: { stockItemId: number };
  UserDetails: undefined;
  UserEdit: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default AuthStack;

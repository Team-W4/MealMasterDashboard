import { createStackNavigator } from '@react-navigation/stack';

export type AuthStackParamList = {
  Login: undefined;
  Loading: undefined;
  Home: undefined;
  Search: undefined;
  RecipeDetails: { recipeId: number };
  StockDetails: { stockId: number };
  UserDetails: undefined;
  UserEdit: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default AuthStack;

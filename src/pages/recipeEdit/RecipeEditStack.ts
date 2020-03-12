import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RecipeEditStackParamList = {
  Name: undefined;
  Pictures: undefined;
  Ingredients: undefined;
  Instructions: undefined;
  CookTime: undefined;
  Tags: undefined;
  AllSet: undefined;
};

export type RecipeEditNavigationProps<T extends keyof RecipeEditStackParamList> = {
  navigation: StackNavigationProp<RecipeEditStackParamList, T>;
  route: RouteProp<RecipeEditStackParamList, T>;
};

const RecipeEditStack = createStackNavigator<RecipeEditStackParamList>();

export default RecipeEditStack;

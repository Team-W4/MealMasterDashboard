import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeNavigationProps } from '../navigator/HomeTab';

export type ConsumeStackParamList = {
  ConsumeReview: undefined;
};

export type ConsumeNavigationProps<T extends keyof ConsumeStackParamList> =
  HomeNavigationProps<'Home'>
  & {
    navigation: StackNavigationProp<ConsumeStackParamList, T>;
    route: RouteProp<ConsumeStackParamList, T>;
  };

const ConsumeStack = createStackNavigator<ConsumeStackParamList>();

export default ConsumeStack;

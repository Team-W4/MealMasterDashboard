import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeNavigationProps } from '../navigator/HomeTab';

export type ReceiptParseStackParamList = {
  ReceiptScan: undefined;
  ReceiptReview: undefined;
  ReceiptConfirm: { addedQuantity: number };
};

export type ReceiptParseNavigationProps<T extends keyof ReceiptParseStackParamList> =
  HomeNavigationProps<'Home'>
  & {
    navigation: StackNavigationProp<ReceiptParseStackParamList, T>;
    route: RouteProp<ReceiptParseStackParamList, T>;
  };

const ReceiptParseStack = createStackNavigator<ReceiptParseStackParamList>();

export default ReceiptParseStack;

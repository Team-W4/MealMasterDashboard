import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  DefaultTheme,
  NavigationContainerProps,
} from '@react-navigation/native';
import { DefaultSemanticColors } from '../../styled/variables/colors';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function reset(root: string) {
  navigationRef.current?.reset({
    key: undefined,
    index: 0,
    routes: [{ name: root }],
    history: [],
  });
}

const Navigator: React.FC<NavigationContainerProps> = (props) => (
  <NavigationContainer
    ref={ navigationRef }
    theme={{
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: DefaultSemanticColors.background,
      },
    }}
    { ...props }
  />
);

export default Navigator;

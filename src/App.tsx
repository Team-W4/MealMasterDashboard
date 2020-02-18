import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import { ThemeProvider } from './styled';
import { default as StyledTheme } from './styled/theme';
import AuthNavigator from './pages/navigator/AuthNavigator';
import { navigationRef } from './pages/navigator/RootNavigator';

const store = createStore(RootReducer, applyMiddleware(thunk));

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={StyledTheme}>
        <NavigationContainer
          ref={navigationRef}
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: StyledTheme.semanticColors.background,
            },
          }}
        >
          <AuthNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

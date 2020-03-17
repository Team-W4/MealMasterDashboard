import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import { ThemeProvider } from './styled';
import theme from './styled/theme';
import AuthPage from './pages/auths';
import Navigator from './pages/navigator/Navigator';

const store = createStore(RootReducer, applyMiddleware(thunk));

const App = (): JSX.Element => (
  <SafeAreaProvider>
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <Navigator>
          <AuthPage />
        </Navigator>
      </ThemeProvider>
    </Provider>
  </SafeAreaProvider>
);

export default App;

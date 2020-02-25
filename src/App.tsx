import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import { ThemeProvider } from './styled';
import theme from './styled/theme';
import AuthPage from './pages/auths';
import Navigator from './pages/navigator/Navigator';

const store = createStore(RootReducer, applyMiddleware(thunk));

const App = (): JSX.Element => (
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <Navigator>
        <AuthPage />
      </Navigator>
    </ThemeProvider>
  </Provider>
  );

export default App;

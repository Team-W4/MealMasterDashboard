import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import { default as StyledTheme } from './styled/theme';
import styled, { ThemeProvider } from './styled';
import LoginPage from './pages/login/containers/LoginPageContainer';

const Container = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.semanticColors.background};
`;

const store = createStore(RootReducer, applyMiddleware(thunk));

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={StyledTheme}>
        <Container>
          <LoginPage />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { default as StyledTheme } from './styled/theme';
import styled, { ThemeProvider } from './styled';
import TitleBar from './pages/title';
import ScrollList from './pages/list';
import RootReducer from './reducers';

import Test from './components/Test';

const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.semanticColors.background};
`;

// TODO: #API Recipe list API here
const RecipeList = [
  {
    title: 'Granola Bowl & Peanut Butter',
    tags: ['healthy', 'easy', 'breakfast'],
    uri:
      'https://simple-veganista.com/wp-content/uploads/2016/04/acai-bowl-recipe-5.jpg',
  },
  {
    title: 'Beets Salad',
    tags: ['organic', 'fast', 'lunch'],
    uri:
      'https://www.jessicagavin.com/wp-content/uploads/2017/11/roasted-beet-salad-with-goat-cheese-1200.jpg',
  },
  {
    title: 'Fresh Linguine',
    tags: ['handmade', 'italian', 'dinner'],
    uri:
      'https://www.chiceats.com/sites/default/files/styles/image_1024x768/public/recipe/photo/homemade-pasta-recipe-1080x810@2x.jpg',
  },
  {
    title: 'Spaghetti & Itatlian Meatballs',
    tags: ['handmade', 'italian', 'dinner'],
    uri:
      'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg',
  },
];

const store = createStore(RootReducer, applyMiddleware(thunk));

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={StyledTheme}>
        {/* <Container>
          <TitleBar title="Good Morning!" />
          <ScrollList items={RecipeList} />
        </Container> */}
        <Test />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

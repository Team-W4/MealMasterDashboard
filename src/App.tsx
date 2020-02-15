import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { default as StyledTheme } from './styled/theme';
import styled, { ThemeProvider } from './styled';
import RecipePage from './pages/recipes';
import ScrollList from './pages/list';
import RootReducer from './reducers';

import Test from './components/Test';

const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.semanticColors.background};
`;

// TODO: #API Recipe list API here
const RecipeList = [
  {
    title: 'Granola Bowl & Peanut Butter',
    tags: ['healthy', 'easy', 'breakfast'],
    uri:
      'https://simple-veganista.com/wp-content/uploads/2016/04/acai-bowl-recipe-5.jpg',
    duration: '5 mins',
    difficulty: 'Easy',
    quantity: 'Serves 4',
  },
  {
    title: 'Beets Salad',
    tags: ['organic', 'fast', 'lunch'],
    uri:
      'https://www.jessicagavin.com/wp-content/uploads/2017/11/roasted-beet-salad-with-goat-cheese-1200.jpg',
    duration: '12 mins',
    difficulty: 'Medium',
    quantity: 'Serves 2',
  },
  {
    title: 'Fresh Linguine',
    tags: ['handmade', 'italian', 'dinner'],
    uri:
      'https://www.chiceats.com/sites/default/files/styles/image_1024x768/public/recipe/photo/homemade-pasta-recipe-1080x810@2x.jpg',
    duration: '35 mins',
    difficulty: 'Medium',
    quantity: 'Serves 4',
  },
  {
    title: 'Spaghetti & Itatlian Meatballs',
    tags: ['handmade', 'italian', 'dinner'],
    uri:
      'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg',
    duration: '65 mins',
    difficulty: 'Hard',
    quantity: 'Serves 4',
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

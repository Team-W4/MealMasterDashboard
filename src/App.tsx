import React from 'react';
import { default as StyledTheme } from './styled/theme';
import styled, { ThemeProvider } from './styled';
import Button from './components/Button';
import ImageCard from './components/ImageCard';
import TitleBar from './pages/title';

const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.semanticColors.background};
  justify-content: center;
  align-items: center;
`;

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={StyledTheme}>
      <Container>
        <TitleBar title="Good Morning!" />
        <ImageCard
          title="Granola Bowl"
          tag="Healthy"
          imageURI="https://simple-veganista.com/wp-content/uploads/2016/04/acai-bowl-recipe-5.jpg"
        />
        <Button title="Add some more" onPress={() => alert('Add')} />
      </Container>
    </ThemeProvider>
  );
};

export default App;

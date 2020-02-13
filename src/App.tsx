import React from 'react';
import styled from './styles/styled';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: palevioletred;
`;

const App = (): JSX.Element => {
  return (
    <Container>
      <Title>Meal Master</Title>
    </Container>
  );
};

export default App;

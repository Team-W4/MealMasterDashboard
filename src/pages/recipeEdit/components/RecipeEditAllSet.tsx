import React, { useContext } from 'react';
import RecipeEditContext from '../RecipeEditContext';
import {
  SafeView, Column, Box, Row,
} from '../../../components/Containers';
import { Heading, Title } from '../../../components/Texts';
import { IconButton } from '../../../components/Buttons';
import { SavedIcon, NextIcon } from '../../../components/Icons';

const RecipeEditAllSet: React.FC = () => {
  const {
    state: {
      name,
    },
  } = useContext(RecipeEditContext);

  const onSubmit = () => {
  };

  return (
    <SafeView full px="xxxl">
      <Column justifyContent="flex-end">
        <Box
          mb="l"
          width={ 50 }
          height={ 50 }
          borderRadius={ 25 }
          borderWidth={ 5 }
          borderColor="neoncarrot"
          alignItems="center"
          justifyContent="center"
        >
          <SavedIcon />
        </Box>
      </Column>
      <Heading mb="s">Congratulations!</Heading>
      <Title>{name}</Title>
      <Row mb="l" alignItems="flex-end" justifyContent="flex-end">
        <IconButton
          onPress={ onSubmit }
        >
          <NextIcon variant="warning" />
        </IconButton>
      </Row>
    </SafeView>
  );
};

export default RecipeEditAllSet;

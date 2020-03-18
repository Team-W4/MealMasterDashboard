import React, { useContext } from 'react';
import RecipeEditContext from '../RecipeEditContext';
import {
  SafeView, Column, Box,
} from '../../../components/Containers';
import { RichTextInput } from '../../../components/Inputs';
import { Heading, Title } from '../../../components/Texts';
import { IconButton } from '../../../components/Buttons';
import { SavedIcon, NextIcon } from '../../../components/Icons';

const RecipeEditAllSet: React.FC = () => {
  const {
    state: {
      name,
      instructions,
      cookTime,
    },
  } = useContext(RecipeEditContext);

  const onSubmit = () => {
  };

  return (
    <SafeView full px="xxxl">
      <Box justifyContent="flex-end">
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
      </Box>
      <Heading mb="s">Congratulations!</Heading>
      <Title mb="s">{name}</Title>
      <Heading mb="s">{`${cookTime} mins`}</Heading>
      <Column>
        <RichTextInput editable={ false } initialContent={ instructions } />
      </Column>
      <Box mb="l" alignItems="flex-end" justifyContent="flex-end">
        <IconButton onPress={ onSubmit }>
          <NextIcon variant="warning" />
        </IconButton>
      </Box>
    </SafeView>
  );
};

export default RecipeEditAllSet;

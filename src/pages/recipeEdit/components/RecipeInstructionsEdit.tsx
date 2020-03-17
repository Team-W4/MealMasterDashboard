import React, { useContext } from 'react';
import { SafeView } from '../../../components/Containers';
import { RichTextInput } from '../../../components/Inputs';
import { Title } from '../../../components/Texts';
import { RecipeEditNavigationProps } from '../RecipeEditStack';
import RecipeEditContext from '../RecipeEditContext';

export type Props = RecipeEditNavigationProps<'Instructions'> &{

};

const RecipeInstructionEdit: React.FC<Props> = ({ navigation }) => {
  const {
    state: {
      name,
    },
    dispatch,
  } = useContext(RecipeEditContext);

  const onSubmit = (instructions?: string) => {
    if (instructions && instructions.length > 0) {
      navigation.push('CookTime');
      dispatch({ type: 'SET_INSTRUCTIONS', payload: { instructions } });
    }
  };

  return (
    <SafeView full>
      <Title px="xxxl" pt="m">{name}</Title>
      <RichTextInput
        onSave={ onSubmit }
      />
    </SafeView>
  );
};

export default RecipeInstructionEdit;

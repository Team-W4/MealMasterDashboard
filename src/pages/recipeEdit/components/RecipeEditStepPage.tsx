import React, { useContext, useState } from 'react';
import {
  SafeView, Row, Column, Box, KeyboardView,
} from '../../../components/Containers';
import { Input, TagInput } from '../../../components/Inputs';
import { IconButton } from '../../../components/Buttons';
import { NextIcon, SavedIcon } from '../../../components/Icons';
import { RecipeEditStackParamList, RecipeEditNavigationProps } from '../RecipeEditStack';
import RecipeEditContext, { RecipeEditState, ActionTypes } from '../RecipeEditContext';

type StepContent = {
  question: string;
  stateKey: keyof RecipeEditState;
  next: keyof RecipeEditStackParamList;
  action: keyof typeof ActionTypes;
  verifyFn: (value: any) => boolean;
  errorMessage: string;
}

const RecipeEditSteps: {
  [index: string]: StepContent;
} = {
  Name: {
    question: 'Name your recipe',
    stateKey: 'name',
    next: 'Instructions',
    action: 'SET_NAME',
    verifyFn: (name: string) => !!name && name.length > 0,
    errorMessage: 'Give your beloved recipe a name, would ya!',
  },
  CookTime: {
    question: 'How long does it take to cook?',
    stateKey: 'cookTime',
    next: 'Tags',
    action: 'SET_COOK_TIME',
    verifyFn: (cookTime: Number) => cookTime > 0,
    errorMessage: 'e.g. 10 minutes for a salad',
  },
  Tags: {
    question: 'How would you describe this recipe?',
    stateKey: 'tags',
    next: 'AllSet',
    action: 'SET_TAGS',
    verifyFn: (tags: Array<string>) => !!tags && tags.length > 0,
    errorMessage: 'Try #delicious, #fancy, #dinner',
  },
};

export type Props = RecipeEditNavigationProps<'Name'> & {
};

const RecipeEditStepPage: React.FC<Props> = ({ navigation, route }) => {
  const { state, dispatch } = useContext(RecipeEditContext);
  const currentStep = RecipeEditSteps[route.name];

  const [value, setValue] = useState(state[currentStep.stateKey]);
  const [error, setError] = useState('');

  const onSubmit = (): void => {
    if (currentStep.verifyFn(value)) {
      const payload: any = {};
      payload[currentStep.stateKey] = value;

      dispatch({ type: currentStep.action, payload });
      navigation.push(currentStep.next);
    } else {
      setError(currentStep.errorMessage);
    }
  };

  return (
    <SafeView full px="xxxl">
      <KeyboardView full behavior="padding">
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
        {
          currentStep.stateKey === 'tags' ? (
            <TagInput
              autoFocus
              title="Tags"
              placeholder="Separate multiple tags by space or comma"
              value={ value.toString() }
              onChangeText={ (e) => setValue(e) }
              error={ error }
            />
          ) : (
            <Input
              autoFocus
              size="large"
              title={ currentStep.question }
              value={ value.toString() }
              onChangeText={ (e) => setValue(e) }
              error={ error }
            />
          )
        }
        <Row mb="l" alignItems="flex-end" justifyContent="flex-end">
          <IconButton
            onPress={ onSubmit }
          >
            <NextIcon variant="warning" />
          </IconButton>
        </Row>
      </KeyboardView>
    </SafeView>
  );
};

export default RecipeEditStepPage;

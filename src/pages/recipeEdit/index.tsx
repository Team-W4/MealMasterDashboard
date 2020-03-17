import React, { useReducer } from 'react';
import RecipeEditStack from './RecipeEditStack';
import RecipeEditContext, { RecipeEditReducer, initialRecipeEditState } from './RecipeEditContext';
import RecipeEditStepPage from './components/RecipeEditStepPage';
import RecipeInstructionEdit from './components/RecipeInstructionsEdit';
import RecipeEditAllSet from './components/RecipeEditAllSet';

export type Props = {

};

const RecipeEditContainer: React.FC<Props> = () => {
  const [state, dispatch] = useReducer(RecipeEditReducer, initialRecipeEditState);

  return (
    <RecipeEditContext.Provider
      value={{ state, dispatch }}
    >
      <RecipeEditStack.Navigator headerMode="none">
        <RecipeEditStack.Screen name="Name" component={ RecipeEditStepPage } />
        {/* <RecipeEditStack.Screen name="Ingredients" component={ RichTextInput } /> */}
        <RecipeEditStack.Screen name="Instructions" component={ RecipeInstructionEdit } />
        <RecipeEditStack.Screen name="CookTime" component={ RecipeEditStepPage } />
        <RecipeEditStack.Screen name="Tags" component={ RecipeEditStepPage } />
        <RecipeEditStack.Screen name="AllSet" component={ RecipeEditAllSet } />
      </RecipeEditStack.Navigator>
    </RecipeEditContext.Provider>
  );
};

export default RecipeEditContainer;

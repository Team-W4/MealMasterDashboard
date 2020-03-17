import { Reducer, createContext, Dispatch } from 'react';

export type RecipeEditState = {
  name: string;
  ingredients: Array<Number>;
  instructions: string;
  cookTime: Number;
  tags: Array<string>;
};

export const initialRecipeEditState: RecipeEditState = {
  name: '',
  ingredients: [],
  instructions: '',
  cookTime: 0,
  tags: [],
};

export enum ActionTypes {
  SET_NAME,
  SET_PICTURES,
  SET_INGREDIENTS,
  SET_INSTRUCTIONS,
  SET_COOK_TIME,
  SET_TAGS,
}

type Action = {
  type: keyof typeof ActionTypes;
  payload: Partial<RecipeEditState>;
};

export const RecipeEditReducer: Reducer<RecipeEditState, Action> = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: payload.name || '',
      };
    case 'SET_PICTURES':
      return state;
    case 'SET_INGREDIENTS':
      return {
        ...state,
        ingredients: payload.ingredients || [],
      };
    case 'SET_INSTRUCTIONS':
      return {
        ...state,
        instructions: payload.instructions || '',
      };
    case 'SET_COOK_TIME':
      return {
        ...state,
        cookTime: payload.cookTime || 0,
      };
    case 'SET_TAGS':
      return {
        ...state,
        tags: payload.tags || [],
      };
    default:
      return state;
  }
};

export type RecipeEditContextProps = {
  state: RecipeEditState;
  dispatch: Dispatch<Action>;
};

const RecipeEditContext = createContext<RecipeEditContextProps>({
  state: initialRecipeEditState,
  dispatch: () => {},
});

export default RecipeEditContext;

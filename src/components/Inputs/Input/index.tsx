import React from 'react';
import { TextInputProps } from 'react-native';
import { useBoolean } from '../../../hooks';
import { Heading, Text } from '../../Texts';
import InputWrapper from './InputWrapper';
import StyledInputWrapper, { Keys as SWKeys } from './StyledInputWrapper';
import StyledInputField, { Props as SIProps } from './StyledInputField';

export type Props = TextInputProps &
  SIProps & {
    title?: string;
    error?: string;
    bordered?: boolean;
  };

const Input: React.FC<Props> = ({
  title,
  variant,
  editable,
  error,
  size,
  bordered,
  ...props
}) => {
  const [focused, { setTrue, setFalse }] = useBoolean(false);

  let inputState: SWKeys = 'normal';
  if (focused) {
    inputState = 'active';
  } else if (error && error.length > 0) {
    inputState = 'error';
  }

  return (
    <InputWrapper>
      <Heading variant={ variant }>{title}</Heading>
      <StyledInputWrapper bordered={ bordered } variant={ inputState }>
        {/*
        // @ts-ignore */}
        <StyledInputField
          variant={ variant }
          size={ size }
          onFocus={ () => setTrue() }
          onBlur={ () => setFalse() }
          { ...props }
        />
      </StyledInputWrapper>
      {error && error.length > 0 ? (
        <Text mt="xs" variant="error" size="normal">
          {error}
        </Text>
      ) : (
        <></>
      )}
    </InputWrapper>
  );
};

Input.defaultProps = {
  size: 'normal',
  bordered: true,
};

export default Input;

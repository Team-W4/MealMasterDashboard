import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Heading, Text } from '../../Texts';
import InputWrapper from './InputWrapper';
import StyledInputWrapper, { Keys as SWKeys } from './StyledInputWrapper';
import StyledInputField, { Props as SIProps } from './StyledInputField';

export type Props = TextInputProps &
  SIProps & {
    title?: string;
    error?: string;
  };

const Input: React.FC<Props> = ({
  title,
  variant,
  editable,
  error,
  size,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  let inputState: SWKeys = 'normal';
  if (focused) {
    inputState = 'active';
  } else if (error && error.length > 0) {
    inputState = 'error';
  }

  return (
    <InputWrapper>
      <Heading variant={ variant }>{title}</Heading>
      <StyledInputWrapper variant={ inputState }>
        {/*
        // @ts-ignore */}
        <StyledInputField
          variant={ variant }
          size={ size }
          editable={ editable }
          onFocus={ () => setFocused(true) }
          onBlur={ () => setFocused(false) }
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
};

export default Input;

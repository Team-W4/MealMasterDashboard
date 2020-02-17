import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import InputWrapper from './InputWrapper';
import StyledInputWrapper, { Keys as SWKeys } from './StyledInputWrapper';
import StyledInputField, { Props as SIProps } from './StyledInputField';
import Heading from '../../Texts/Heading';
import Text from '../../Texts/Text';

export type Props = TextInputProps &
  SIProps & {
    title?: string;
    error?: string;
  };

const Input: React.FC<Props> = ({ title, editable, error, size, ...props }) => {
  const [focused, setFocused] = useState(false);

  let inputState: SWKeys = 'normal';
  if (focused) {
    inputState = 'active';
  } else if (error && error.length > 0) {
    inputState = 'error';
  }

  return (
    <InputWrapper>
      <Heading>{title}</Heading>
      <StyledInputWrapper variant={inputState}>
        <StyledInputField
          size={size}
          editable={editable}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
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

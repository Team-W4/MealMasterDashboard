import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import StyledButtonWrapper, { Props as SWProps } from './StyledButtonWrapper';
import StyledLabel from './StyledButtonLabel';

export type Props = SWProps & {
  title?: string;
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const Button: React.FC<Props> = ({ title, onPress, ...props }) => {
  return (
    <StyledButtonWrapper onPress={onPress} {...props}>
      <StyledLabel>{title}</StyledLabel>
    </StyledButtonWrapper>
  );
};

export default Button;

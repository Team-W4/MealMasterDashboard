import React from 'react';
import StyledButtonWrapper, { Props as SWProps } from './StyledButtonWrapper';
import StyledLabel from './StyledButtonLabel';

export type Props = SWProps & {
  title?: string;
  onPress?: () => void;
};

const Button = ({ title, onPress, ...props }: Props): JSX.Element => {
  return (
    <StyledButtonWrapper onPress={onPress} {...props}>
      <StyledLabel>{title}</StyledLabel>
    </StyledButtonWrapper>
  );
};

export default Button;

import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import StyledButtonWrapper, { Props as SWProps } from './StyledButtonWrapper';
import StyledLabel from './StyledButtonLabel';

export type Props = SWProps & {
  title?: string;
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const Button: React.FC<Props> = ({
  title,
  variant,
  children,
  onPress,
  ...props
}) => {
  return (
    <StyledButtonWrapper variant={variant} onPress={onPress} {...props}>
      {title && (
        <StyledLabel variant={variant === 'normal' ? 'warning' : 'inverted'}>
          {title}
        </StyledLabel>
      )}
      {children}
    </StyledButtonWrapper>
  );
};

Button.defaultProps = {
  variant: 'normal',
  size: 'normal',
};

export default Button;

import React, { PropsWithChildren } from 'react';
import {
 space, SpaceProps, flexbox, FlexboxProps,
} from 'styled-system';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import styled from '../../../styled';
import cardColors, { CardColorProps } from '../cardColors';

export type Props = SpaceProps &
  FlexboxProps &
  CardColorProps & {
    onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };

const StyledCardWrapper = styled.View<Props>`
  ${space}
  ${flexbox}
  width: 100%;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.background};
  ${cardColors}
  border-radius: ${({ theme: { space: spaces } }) => spaces.s};
  ${({ variant, theme: { semanticColors } }) => (variant === 'transparent' ? '' : `
    elevation: 10;
    box-shadow: 0 15px 18px ${semanticColors.shadow};
  `)}
`;

const StyledButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  align-self: flex-start;
`;

const Card: React.FC<PropsWithChildren<Props>> = ({
  onPress,
  ...props
}) => (
  onPress ? (
    <StyledButtonWrapper onPress={ onPress }>
      <StyledCardWrapper { ...props } />
    </StyledButtonWrapper>
  ) : (
    <StyledCardWrapper { ...props } />
  )
);

Card.defaultProps = {
  variant: 'normal',
};

export default Card;

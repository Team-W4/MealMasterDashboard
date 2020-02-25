import React, { PropsWithChildren } from 'react';
import { space, SpaceProps } from 'styled-system';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import styled from '../../../styled';
import cardColors, { CardColorProps } from '../cardColors';

export type Props = SpaceProps &
  CardColorProps & {
    onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  };

const StyledCardWrapper = styled.TouchableOpacity<Props>`
  ${space}
  width: 100%;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.background};
  ${cardColors}
  border-radius: ${({ theme: { space: spaces } }) => spaces.s};
  elevation: 10;
  box-shadow: 0 15px 18px
    ${({ theme: { semanticColors } }) => semanticColors.shadow};
`;

const Card: React.FC<PropsWithChildren<Props>> = ({ ...props }) => (
  <StyledCardWrapper { ...props } />
);

Card.defaultProps = {
  variant: 'normal',
};

export default Card;

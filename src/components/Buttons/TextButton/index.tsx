import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import styled from '../../../styled';
import { Text, TextProps } from '../../Texts';

export type Props = TextProps & {
  onLongPress?: (ev: NativeSyntheticEvent<NativeTouchEvent> | void) => void;
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent> | void) => void;
};

const StyledTextButtonWrapper = styled.TouchableOpacity`
  align-self: flex-start;
`;

const TextButon: React.FC<Props> = ({ onPress, onLongPress, ...props }) => (
  <StyledTextButtonWrapper onPress={ onPress } onLongPress={ onLongPress }>
    <Text { ...props } />
  </StyledTextButtonWrapper>
);

export default TextButon;

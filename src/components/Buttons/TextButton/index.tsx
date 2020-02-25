import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import styled from '../../../styled';
import Text, { Props as TextProps } from '../../Texts/Text';

export type Props = TextProps & {
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent> | void) => void;
};

const StyledTextButtonWrapper = styled.TouchableOpacity`
  align-self: flex-start;
`;

const TextButon: React.FC<Props> = ({ onPress, ...props }) => (
  <StyledTextButtonWrapper onPress={ onPress }>
    <Text { ...props } />
  </StyledTextButtonWrapper>
);

export default TextButon;

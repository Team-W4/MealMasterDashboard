import styled from '../../../styled';

export type Props = {
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const StyledCardWrapper = styled.TouchableOpacity<Props>`
  width: 100%;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.background};
  border-radius: ${({ theme: { space } }) => space.s};
  box-shadow: 0 15px 18px ${({ theme: { semanticColors } }) => semanticColors.shadow};
`;

export default StyledCardWrapper;

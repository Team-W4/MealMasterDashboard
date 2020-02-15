import styled from '../../../styled';

const StyledCardWrapper = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.background};
  border-radius: ${({ theme: { space } }) => space.s};
  box-shadow: 0 15px 18px ${({ theme: { semanticColors } }) => semanticColors.shadow};
`;

export default StyledCardWrapper;

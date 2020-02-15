import styled from '../../styled';

const StyleRoundedButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.background};
  box-shadow: 0 15px 18px ${({ theme: { semanticColors } }) => semanticColors.shadow};
`;

export default StyleRoundedButton;

import styled from '../../styled';

const StyledLabelWrapper = styled.View`
  height: 50px;
  width: 160px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.primary};
  border-top-right-radius: ${({ theme: { space } }) => space.l};
  border-bottom-left-radius: ${({ theme: { space } }) => space.l};
`;

export default StyledLabelWrapper;

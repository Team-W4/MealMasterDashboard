import styled from '../../styled';

const StyledLabelWrapper = styled.View`
  height: 60px;
  min-width: 160px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.primary};
  border-top-right-radius: ${({ theme: { space } }) => space.l};
  padding: ${({ theme: { space } }) => space.m};
`;

export default StyledLabelWrapper;

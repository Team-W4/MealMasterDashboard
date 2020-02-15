import styled from '../../styled';

const StyledTagWrapper = styled.View`
  height: 25px;
  min-width: 90px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding-left: ${({ theme: { space } }) => space.m};
  padding-right: ${({ theme: { space } }) => space.m};
  border-radius: ${({ theme: { space } }) => space.xs};
  background-color: ${({ theme: { semanticColors } }) => semanticColors.foreground};
`;

export default StyledTagWrapper;

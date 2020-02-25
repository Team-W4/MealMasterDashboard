import styled from '../../styled';

const StyledRatingWrapper = styled.View`
  width: 110px;
  height: ${({ theme: { space } }) => space.xl};
  border-radius: ${({ theme: { space } }) => space.xs};
  justify-content: center;
  background-color: ${({ theme: { semanticColors } }) =>
    semanticColors.primary};
`;

export default StyledRatingWrapper;

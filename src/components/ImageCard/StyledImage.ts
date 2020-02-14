import styled from '../../styled';

const StyledImage = styled.Image`
  height: 100px;
  border-top-right-radius: ${({ theme: { space } }) => space.s};
  border-top-left-radius: ${({ theme: { space } }) => space.s};
`;

export default StyledImage;

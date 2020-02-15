import styled from '../../styled';

const Visual = styled.Image`
  height: 430px;
  width: 100%;
  border-bottom-right-radius: ${({ theme: { space } }) => space.l};
  border-bottom-left-radius: ${({ theme: { space } }) => space.l};
`;

export default Visual;

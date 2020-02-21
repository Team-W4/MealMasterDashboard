import styled from '../../styled';

const ScrollList = styled.ScrollView`
  padding: ${({ theme: { space } }) => space.l};
  padding-top: ${({ theme: { space } }) => space.l};
  width: 100%;
`;

export default ScrollList;

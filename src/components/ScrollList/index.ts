import styled from '../../styled';

const ScrollList = styled.ScrollView`
  padding-top: ${({ theme: { space } }) => space.l};
  padding-bottom: ${({ theme: { space } }) => space.l};
  width: 100%;
`;

export default ScrollList;

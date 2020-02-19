import styled from '../../styled';

const ScrollList = styled.ScrollView`
  padding-top: ${({ theme: { space } }) => space.m};
  padding-bottom: ${({ theme: { space } }) => space.m};
  width: 100%;
`;

export default ScrollList;

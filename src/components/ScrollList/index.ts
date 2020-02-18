import styled from '../../styled';

const ScrollList = styled.ScrollView`
  padding-top: ${({ theme: { space } }) => space.m}
  padding-bottom: ${({ theme: { space } }) => space.m}
  padding-left: ${({ theme: { space } }) => space.xxxl};
  padding-right: ${({ theme: { space } }) => space.xxxl};
  width: 100%;
`;

export default ScrollList;

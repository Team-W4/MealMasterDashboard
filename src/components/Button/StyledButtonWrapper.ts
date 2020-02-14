import styled from '../../styled';

enum Sizes {
  small,
  normal,
  large,
}

export type Props = {
  size?: keyof typeof Sizes;
};

const StyledButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  padding: ${({ theme: { space } }) => space.l};
  border-radius: ${({ theme: { space } }) => space.s};
  background-color: ${({ theme: { semanticColors } }) => semanticColors.primary};
`;

export default StyledButtonWrapper;

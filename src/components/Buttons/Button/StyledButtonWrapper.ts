import styled from '../../../styled';
import buttonSizes, { ButtonSizeProps } from '../buttonSizes';
import buttonColors, { ButtonColorProps } from '../buttonColors';

export type Props = ButtonSizeProps &
  ButtonColorProps & {
    rounded?: boolean;
    flat?: boolean;
  };

const StyledButtonWrapper = styled.TouchableOpacity<Props>`
  ${buttonSizes}
  ${buttonColors}
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme: { space } }) => space.s};
  ${({ rounded, theme: { space } }) =>
    `border-radius: ${rounded ? '100px' : space.s};`}
  ${({ flat, theme: { semanticColors } }) =>
    flat ? '' : `box-shadow: 0 15px 18px ${semanticColors.shadow}};`}
`;

StyledButtonWrapper.defaultProps = {
  rounded: false,
  flat: false,
};

export default StyledButtonWrapper;

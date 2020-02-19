import { variant } from 'styled-system';
import styled from '../../../styled';
import Button, { Props as ButtonProps } from '../Button';
import { ButtonSizeProps } from '../buttonSizes';

const iconButtonSizes = variant({
  prop: 'size',
  variants: {
    small: {
      width: '25px',
      height: '25px',
    },
    normal: {
      width: '50px',
      height: '50px',
    },
    large: {
      width: '75px',
      height: '75px',
    },
    epic: {
      width: '100px',
      height: '100px',
    },
  },
});

export type Props = ButtonSizeProps & Omit<ButtonProps, 'title'>;

const IconButton = styled(Button)<Props>`
  ${iconButtonSizes}
  aspect-ratio: 1;
  border-radius: 100px;
`;

IconButton.defaultProps = {
  size: 'normal',
};

export default IconButton;

import styled from '../../../styled';
import Button, { Props as ButtonProps } from '../Button';

export type Props = Omit<ButtonProps, 'title'>;

const IconButton = styled(Button)<Props>`
  aspect-ratio: 1;
  border-radius: 100px;
`;

export default IconButton;

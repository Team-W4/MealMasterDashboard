import styled from '../../styled';
import visualSizes, { VisualSizeProps } from './visualSizes';

const Visual = styled.Image<VisualSizeProps>`
  ${visualSizes}
  width: 100%;
  border-bottom-right-radius: ${({ theme: { space } }) => space.l};
  border-bottom-left-radius: ${({ theme: { space } }) => space.l};
`;

Visual.defaultProps = {
  size: 'normal',
};

export default Visual;

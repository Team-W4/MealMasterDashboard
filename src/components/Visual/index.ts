import styled from '../../styled';
import visualSizes, { VisualSizeProps } from './visualSizes';

const Visual = styled.Image<VisualSizeProps>`
  ${visualSizes}
  width: 100%;
`;

Visual.defaultProps = {
  size: 'normal',
};

export default Visual;

import styled from '../../../styled';
import Text from '../Text';

const Paragraph = styled(Text).attrs(() => ({
  size: 'h2',
  variant: 'normal',
}))`
  line-height: ${({ theme: { lineHeights } }) => lineHeights.pica};
`;

export default Paragraph;

import styled from '../../../styled';
import Text from '../Text';

const Paragraph = styled(Text).attrs(() => ({
  size: 'h2',
}))`
  line-height: ${({ theme: { lineHeights } }) => lineHeights.pica};
`;

export default Paragraph;

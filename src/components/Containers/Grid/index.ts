import Box from '../Box';
import styled from '../../../styled';

const Grid = styled(Box)`
  flex-direction: row;
`;

export const Column = styled(Box)`
  flex: 1;
`;

export const Row = styled(Grid)`
  flex: 1;
`;

export default Grid;

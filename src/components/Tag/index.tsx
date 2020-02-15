import React from 'react';
import Text from '../Texts/Text';
import StyledTagWrapper from './StyledTagWrapper';

export type Props = {
  value: string;
};

const Tag: React.FC<Props> = ({ value }) => (
  <StyledTagWrapper>
    <Text variant="secondary">{value}</Text>
  </StyledTagWrapper>
);

export default Tag;

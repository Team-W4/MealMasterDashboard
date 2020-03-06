import React from 'react';
import { Text } from '../Texts';
import StyledLabelWrapper from './StyledLabelWrapper';

export type Props = {
  value: string;
};

const Label: React.FC<Props> = ({ value, ...props }) => (
  <StyledLabelWrapper { ...props }>
    <Text variant="inverted">{value}</Text>
  </StyledLabelWrapper>
);

export default Label;

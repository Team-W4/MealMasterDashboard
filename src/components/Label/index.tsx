import React from 'react';
import StyledLabelWrapper from './StyledLabelWrapper';
import Text from '../Texts/Text';

export type Props = {
  value: string;
};

const Label: React.FC<Props> = ({ value, ...props }) => (
  <StyledLabelWrapper {...props}>
    <Text variant="inverted">{value}</Text>
  </StyledLabelWrapper>
);

export default Label;

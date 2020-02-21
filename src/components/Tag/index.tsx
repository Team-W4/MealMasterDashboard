import React from 'react';
import Text from '../Texts/Text';
import StyledTagWrapper from './StyledTagWrapper';
import { TagColorProps } from './tagColors';

export type Props = TagColorProps & {
  value: string;
};

const Tag: React.FC<Props> = ({ value, variant, ...props }) => (
  <StyledTagWrapper variant={variant} {...props}>
    <Text variant={variant !== 'normal' ? 'inverted' : 'secondary'}>{value}</Text>
  </StyledTagWrapper>
);

Tag.defaultProps = {
  variant: 'normal',
};

export default Tag;

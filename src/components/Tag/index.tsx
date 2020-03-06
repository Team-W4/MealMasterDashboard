import React from 'react';
import { Text } from '../Texts';
import { TagColorProps } from './tagColors';
import StyledTagWrapper from './StyledTagWrapper';

export type Props = TagColorProps & {
  value: string;
};

const Tag: React.FC<Props> = ({ value, variant, ...props }) => (
  <StyledTagWrapper variant={ variant } { ...props }>
    <Text variant={ variant !== 'normal' ? 'inverted' : 'secondary' }>
      {value}
    </Text>
  </StyledTagWrapper>
);

Tag.defaultProps = {
  variant: 'normal',
};

export default Tag;

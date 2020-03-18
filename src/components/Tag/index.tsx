import React from 'react';
import { Box } from '../Containers';
import { IconButton } from '../Buttons';
import { CancelIcon } from '../Icons';
import { Text } from '../Texts';
import { TagColorProps } from './tagColors';
import StyledTagWrapper from './StyledTagWrapper';

export type Props = TagColorProps & {
  value: string;
  onRemove?: () => void;
};

const Tag: React.FC<Props> = ({
 value, variant, onRemove, ...props
}) => (
  <StyledTagWrapper variant={ variant } { ...props }>
    <Text
      mr={ onRemove ? 'm' : '0' }
      variant={ variant !== 'normal' ? 'inverted' : 'secondary' }
    >
      {value}
    </Text>
    {
      onRemove ? (
        <Box position="absolute" right="0">
          <IconButton variant="transparent" size="small" onPress={ onRemove }>
            <CancelIcon size="small" variant={ variant !== 'normal' ? 'inverted' : 'secondary' } />
          </IconButton>
        </Box>
      ) : (
        <></>
      )
    }
  </StyledTagWrapper>
);

Tag.defaultProps = {
  variant: 'normal',
};

export default Tag;

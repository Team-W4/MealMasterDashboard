import React from 'react';
import Box from '../../Containers/Box';
import Subtitle from '../../Texts/Subtitle';
import Heading from '../../Texts/Heading';
import Text from '../../Texts/Text';
import StyledCardWrapper, { Props as SWProps } from './StyledCardWrapper';

export type Props = SWProps & {
  title: string;
  tag?: string;
  subtitle?: string;
};

const Card = ({ title, tag, subtitle }: Props) => (
  <StyledCardWrapper>
    <Box px="m" py="s">
      {tag && <Subtitle mb="xs">{tag}</Subtitle>}
      <Heading>{title}</Heading>
      {subtitle && <Text>{subtitle}</Text>}
    </Box>
  </StyledCardWrapper>
);

export default Card;

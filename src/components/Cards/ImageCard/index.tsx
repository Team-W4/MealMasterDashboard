import React from 'react';
import StyledCardWrapper from '../Card/StyledCardWrapper';
import Box from '../../Containers/Box';
import Subtitle from '../../Texts/Subtitle';
import Heading from '../../Texts/Heading';
import StyledImage from './StyledImage';

export type Props = {
  imageURI?: string;
  title?: string;
  tag?: string;
};

const ImageCard = ({ imageURI, title, tag }: Props): JSX.Element => {
  return (
    <StyledCardWrapper>
      <StyledImage source={{ uri: imageURI }} />
      <Box px="m" py="s">
        {tag && <Subtitle mb="xs">{tag}</Subtitle>}
        <Heading>{title}</Heading>
      </Box>
    </StyledCardWrapper>
  );
};

export default ImageCard;

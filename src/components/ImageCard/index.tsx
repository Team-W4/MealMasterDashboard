import React from 'react';
import StyledCardWrapper from './StyledCardWrapper';
import Subtitle from '../Texts/Subtitle';
import Heading from '../Texts/Heading';
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
      <Subtitle>{tag?.toUpperCase()}</Subtitle>
      <Heading>{title}</Heading>
    </StyledCardWrapper>
  );
};

export default ImageCard;

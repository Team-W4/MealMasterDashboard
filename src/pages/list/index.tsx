import React from 'react';
import styled from '../../styled';
import ImageCard from '../../components/Cards/ImageCard';
import Box from '../../components/Containers/Box';

export type Props = {
  items: Array<any>;
};

const StyledScrollList = styled.ScrollView`
  padding-top: ${({ theme: { space } }) => space.m}
  padding-bottom: ${({ theme: { space } }) => space.m}
  padding-left: ${({ theme: { space } }) => space.xxxl};
  padding-right: ${({ theme: { space } }) => space.xxxl};
  width: 100%;
`;

const ScrollList = ({ items }: Props) => (
  <StyledScrollList>
    {items.map((item, index) => (
      <Box key={index} mb="xl">
        <ImageCard title={item.title} tag={item.tags[0]} imageURI={item.uri} />
      </Box>
    ))}
  </StyledScrollList>
);

export default ScrollList;

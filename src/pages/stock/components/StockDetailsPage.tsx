import React from 'react';
import styled from '../../../styled';
import StyledCardWrapper from '../../../components/Cards/Card/StyledCardWrapper'
import Box from '../../../components/Containers/Box'
import Heading from '../../../components/Texts/Heading'
import Subtitle from '../../../components/Texts/Subtitle'
import FavoriteButton, {
    Props as FavProps,
} from '../../../components/FavoriteButton';
import Tag from '../../../components/Tag';

const StyledImage = styled.Image`
    height: 300px;
    border-top-right-radius: ${({ theme: { space } }) => space.s};
    border-top-left-radius: ${({ theme: { space } }) => space.s};
    border-bottom-right-radius: ${({ theme: { space } }) => space.s};
    border-bottom-left-radius: ${({ theme: { space } }) => space.s};
`;

const SaveStockButton = styled(FavoriteButton)`
  position: absolute;
  bottom: -20px;
  right: ${({ theme: { space } }) => space.xxxl};
`;

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: ${({ theme: { space } }) => space.m};
`;

export type Props = {
    imageURI? : string;
    title?: string;
    tags?: Array<{ id: number; name: string }>;
};

const StockDetailsPage: React.FC<Props> = ({
    imageURI,
    title,
    tags
}) => {
    return (
        <StyledCardWrapper>
            <Box px="xs" py="xs">
                <StyledImage source={{ uri: imageURI }}/>
                <SaveStockButton favorited={true}/>
            </Box>
            <Box px="m" py="xs">
                <Subtitle ml="s">{"Produce"}</Subtitle>
                <Heading mb="xs" ml="s">{title}</Heading>
                {tags && (
                    <TagList horizontal showsHorizontalScrollIndicator={false}>
                        {tags?.map((tag: {id: number; name: string; }) => (
                            <Box key={tag.id} alignSelf="flex-start" mr="s">
                                <Tag value={tag.name} />
                            </Box>
                        ))}
                    </TagList>
                )}
            </Box>
        </StyledCardWrapper>
    )
};

export default StockDetailsPage;

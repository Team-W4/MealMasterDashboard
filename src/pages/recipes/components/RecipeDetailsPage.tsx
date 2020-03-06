import React from 'react';
import styled from '../../../styled';
import { GenericFood, Tag as TagType } from '../../../constants/dataTypes';
import { Box, Grid, Column } from '../../../components/Containers';
import { Button, IconButton } from '../../../components/Buttons';
import { Title, Subtitle, Paragraph } from '../../../components/Texts';
import { FavoriteIcon, BackIcon, ShareIcon } from '../../../components/Icons';
import ProfileImage from '../../../components/ProfileImage';
import Rating from '../../../components/Rating';
import Tag from '../../../components/Tag';
import Visual from '../../../components/Visual';
import Label from '../../../components/Label';

const RecipeDetailsScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.xxl};
  margin-bottom: ${({ theme: { space } }) => space.m};
`;

const CalorieLabel = styled(Label)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const AddStockButton = styled(Button)`
  position: absolute;
  bottom: ${({ theme: { space } }) => space.xxxl};
`;


export type Props = {
  onFavorite?: () => void;
  onShare?: () => void;
  onBack: () => void;
  recipeDetails: {
    rating?: number;
    name?: string;
    cookTime?: string | number;
    ingredients?: Array<GenericFood>;
    tags?: Array<TagType>;
    instructions: string;
  };
};

const RecipeDetailsPage: React.FC<Props> = ({
  onFavorite,
  onBack,
  onShare,
  recipeDetails: {
    // rating,
    name,
    cookTime,
    ingredients,
    tags,
    instructions,
  },
}) => (
  <Box height="100%" width="100%">
    <RecipeDetailsScroll>
      <Box position="relative" mb="xxl">
        <Visual
          size="epic"
          source={{
            uri:
              'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg',
          }}
        />
        <Box position="absolute" right="xxxl" bottom="-25px">
          <IconButton onPress={ onFavorite }>
            <FavoriteIcon variant="warning" />
          </IconButton>
        </Box>
        <Box position="absolute" left="xxxl">
          <IconButton rounded flat size="normal" onPress={ onBack }>
            <BackIcon size="normal" variant="warning" />
          </IconButton>
        </Box>
        <Box position="absolute" right="xxxl">
          <IconButton rounded flat size="normal" onPress={ onShare }>
            <ShareIcon size="normal" variant="warning" />
          </IconButton>
        </Box>
        <CalorieLabel value="650 kcal/serving" />
      </Box>
      <Grid px="xxl" mb="m">
        <Column>
          {/* TODO: Adds rating */}
          <Rating value={ 4.3 } />
          <Title mt="m" mb="s">
            {name}
          </Title>
          <Subtitle>
            {`${cookTime || 0} minutes | ${(ingredients
            && ingredients.length)
            || 0} ingredients`}
          </Subtitle>
        </Column>
        <Box ml="s" justifyContent="center">
          <ProfileImage />
        </Box>
      </Grid>
      {tags && tags.length > 0 && (
        <TagList horizontal showsHorizontalScrollIndicator={ false }>
          {tags.map((tag: TagType) => (
            <Box key={ tag.id } alignSelf="flex-start" mr="xs">
              <Tag value={ tag.name } />
            </Box>
          ))}
          <Box width="48px" />
        </TagList>
      )}
      <Paragraph px="xxl">{instructions}</Paragraph>
      <Box height="120px" />
    </RecipeDetailsScroll>
    <Box px="xl" alignItems="center">
      <AddStockButton variant="warning" title="Use this recipe" />
    </Box>
  </Box>
);

RecipeDetailsPage.defaultProps = {};

export default RecipeDetailsPage;

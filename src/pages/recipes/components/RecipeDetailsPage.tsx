import React from 'react';
import styled from '../../../styled';
import FavoriteIcon from '../../../components/Icons/Favorite';
import BackIcon from '../../../components/Icons/Back';
import ShareIcon from '../../../components/Icons/Share';
import Box from '../../../components/Containers/Box';
import Grid, { Column } from '../../../components/Containers/Grid';
import IconButton from '../../../components/Buttons/IconButton';
import Label from '../../../components/Label';
import ProfileImage from '../../../components/ProfileImage';
import Rating from '../../../components/Rating';
import Tag from '../../../components/Tag';
import Title from '../../../components/Texts/Title';
import Subtitle from '../../../components/Texts/Subtitle';
import Paragraph from '../../../components/Texts/Paragraph';
import Visual from '../../../components/Visual';

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

export type Props = {
  onFavorite: () => void;
  onBack: () => void;
  onShare: () => void;
  recipeDetails?: {
    rating?: number;
    name?: string;
    cookTime?: string | number;
    ingredients?: Array<any>;
    tags?: Array<{ id: number; name: string }>;
    instructions: string;
  };
};

const RecipeDetailsPage: React.FC<Props> = ({
  onFavorite,
  onBack,
  onShare,
  recipeDetails: { rating, name, cookTime, ingredients, tags, instructions },
}) => (
  <RecipeDetailsScroll>
    <Box position="relative" mb="xxl">
      <Visual
        source={{
          uri:
            'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg',
        }}
      />
      <Box position="absolute" right="xxxl" bottom="-25px">
        <IconButton onPress={onFavorite}>
          <FavoriteIcon variant="warning" />
        </IconButton>
      </Box>
      <Box position="absolute" left="xxxl" top="50px">
        <IconButton rounded flat size="small" onPress={onBack}>
          <BackIcon size="small" variant="warning" />
        </IconButton>
      </Box>
      <Box position="absolute" right="xxxl" top="50px">
        <IconButton rounded flat size="small" onPress={onShare}>
          <ShareIcon size="small" variant="warning" />
        </IconButton>
      </Box>
      <CalorieLabel value="650 kcal/serving" />
    </Box>
    <Grid px="xxxl" mb="m">
      <Column>
        {/*TODO: Adds rating */}
        <Rating value={4.3} />
        <Title mt="m" mb="s">
          {name}
        </Title>
        <Subtitle>{`${cookTime || 0} minutes | ${(ingredients &&
          ingredients.length) ||
          0} ingredients`}</Subtitle>
      </Column>
      <Box justifyContent="center">
        <ProfileImage />
      </Box>
    </Grid>
    {tags && (
      <TagList horizontal showsHorizontalScrollIndicator={false}>
        {tags.map((tag: { id: number; name: string }) => (
          <Box key={tag.id} alignSelf="flex-start" mr="xs">
            <Tag value={tag.name} />
          </Box>
        ))}
      </TagList>
    )}
    <Paragraph px="xxxl">{instructions}</Paragraph>
  </RecipeDetailsScroll>
);

RecipeDetailsPage.defaultProps = {
};

export default RecipeDetailsPage;

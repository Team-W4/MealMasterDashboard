import React from 'react';
import Box from '../../../components/Containers/Box';
import Grid, { Column } from '../../../components/Containers/Grid';
import FavoriteButton, {
  Props as FavProps,
} from '../../../components/FavoriteButton';
import Label from '../../../components/Label';
import ProfileImage from '../../../components/ProfileImage';
import Rating from '../../../components/Rating';
import Tag from '../../../components/Tag';
import Subtitle from '../../../components/Texts/Subtitle';
import Text from '../../../components/Texts/Text';
import Title from '../../../components/Texts/Title';
import Visual from '../../../components/Visual';
import styled from '../../../styled';

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

const SaveRecipeButton = styled(FavoriteButton)`
  position: absolute;
  bottom: -25px;
  right: ${({ theme: { space } }) => space.xxxl};
`;

const CalorieLabel = styled(Label)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export type Props = FavProps & {
  id: string | number;
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
  id,
  recipeDetails: { rating, name, cookTime, ingredients, tags, instructions },
}) => (
  <RecipeDetailsScroll>
    <Box mb="xxl">
      <Visual
        source={{
          uri:
            'https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/1513804165/sesame-beet-salad.jpg?itok=3MZd4xPb&1513804974',
        }}
      />
      <SaveRecipeButton favorited={true} />
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
        {tags.map((tag, index) => (
          <Box key={index} alignSelf="flex-start" mr="xs">
            <Tag value={tag.name} />
          </Box>
        ))}
      </TagList>
    )}
    <Text size="h2" px="xxxl">
      {instructions}
    </Text>
  </RecipeDetailsScroll>
);

RecipeDetailsPage.defaultProps = {
  favorited: true,
};

export default RecipeDetailsPage;

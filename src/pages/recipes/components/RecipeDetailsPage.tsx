import React from 'react';
import { StatusBar } from 'react-native';
import styled from '../../../styled';
import { RecipeDetails, Tag as TagType } from '../../../constants/dataTypes';
import { titleHelper } from '../../../utils';
import { Box, Grid, Column } from '../../../components/Containers';
import { DrawerCard } from '../../../components/Cards';
import { Button, IconButton } from '../../../components/Buttons';
import { Title, Subtitle, Paragraph } from '../../../components/Texts';
import { FavoriteIcon } from '../../../components/Icons';
import ProfileImage from '../../../components/ProfileImage';
import Rating from '../../../components/Rating';
import Tag from '../../../components/Tag';
import Visual from '../../../components/Visual';
import Label from '../../../components/Label';

const RECIPE_PLACEHOLDER = 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg';

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
  justify-content: flex-start;
  height: 70px;
`;

export type Props = {
  onFavorite?: () => void;
  onShare?: () => void;
  onBack: () => void;
  favorited?: boolean;
  recipeDetails: RecipeDetails;
};

const RecipeDetailsPage: React.FC<Props> = ({
  onFavorite,
  favorited,
  recipeDetails: {
    name,
    cookTime,
    ingredients,
    tags,
    instructions,
    image,
  },
}) => (
  <Box height="100%" width="100%">
    <StatusBar barStyle="light-content" />
    <Box mb="xxl">
      <Visual
        size="epic"
        source={{
          uri: image || RECIPE_PLACEHOLDER,
        }}
      />
      <CalorieLabel value="650 kcal / serving" />
    </Box>
    <DrawerCard
      topRightOverlay={ (
        <IconButton variant={ favorited ? 'warning' : 'normal' } onPress={ onFavorite }>
          <FavoriteIcon variant={ favorited ? 'inverted' : 'warning' } />
        </IconButton>
      ) }
    >
      <Grid px="xxl" mb="m">
        <Column>
          <Rating value={ 4.3 } />
          <Title mt="m" mb="s">
            {titleHelper(name)}
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
          {
            (
              tags.sort((a,b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
              })
            ).map((tag: TagType) => (
              <Box key={ tag.id } alignSelf="flex-start" mr="xs">
                <Tag value={ tag.name } />
              </Box>
            ))
          }
          <Box width="48px" />
        </TagList>
      )}
      <Paragraph px="xxl">{instructions}</Paragraph>
      <Box height="100px" />
    </DrawerCard>
    <Box
      position="absolute"
      left="0"
      right="0"
      bottom="xxxl"
      px="xl"
      alignItems="center"
    >
      <Button variant="warning" title="Use this recipe" />
    </Box>
  </Box>
);

RecipeDetailsPage.defaultProps = {};

export default RecipeDetailsPage;

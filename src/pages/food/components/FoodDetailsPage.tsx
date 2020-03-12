import React from 'react';
import styled from '../../../styled';
import { titleHelper } from '../../../utils';
import { GenericFood, Tag as TagType } from '../../../constants/dataTypes';
import { Box } from '../../../components/Containers';
import { DrawerCard } from '../../../components/Cards';
import { IconButton } from '../../../components/Buttons';
import { Title, Subtitle } from '../../../components/Texts';
import { AddIcon } from '../../../components/Icons';
import Tag from '../../../components/Tag';
import Visual from '../../../components/Visual';

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.l};
  margin-bottom: ${({ theme: { space } }) => space.xl};
`;

export type Props = {
  onBack?: () => void;
  onAdd?: () => void;
  foodDetails: GenericFood;
};

const FoodDetailsPage: React.FC<Props> = ({
  onAdd,
  foodDetails: {
    name, tags,
  },
}) => (
  <Box height="100%" width="100%">
    <Visual
      size="large"
      source={{
        uri:
          'https://www.chiceats.com/sites/default/files/styles/image_1024x768/public/recipe/photo/homemade-pasta-recipe-1080x810@2x.jpg',
      }}
    />
    <DrawerCard
      topOffset={ 300 }
      topRightOverlay={ (
        <IconButton variant="warning" onPress={ onAdd }>
          <AddIcon variant="inverted" />
        </IconButton>
      ) }
    >
      <Box px="l">
        <Subtitle mb="s">PRODUCE</Subtitle>
        <Title mb="s">{titleHelper(name)}</Title>
      </Box>
      <TagList horizontal showsHorizontalScrollIndicator={ false }>
        {tags && tags.map((tag: TagType) => (
          <Box key={ tag.id } alignSelf="flex-start" mr="xs">
            <Tag value={ tag.name } />
          </Box>
        ))}
      </TagList>
    </DrawerCard>
  </Box>
);

export default FoodDetailsPage;
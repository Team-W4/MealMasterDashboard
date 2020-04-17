import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import RecipeEditContext from '../RecipeEditContext';
import styled from '../../../styled';
import {
  SafeView, Column, Box,
} from '../../../components/Containers';
import { RichTextInput } from '../../../components/Inputs';
import { Heading, Title } from '../../../components/Texts';
import { IconButton } from '../../../components/Buttons';
import { SavedIcon, CheckIcon } from '../../../components/Icons';
import Tag from '../../../components/Tag';
import { RecipeEditNavigationProps } from '../RecipeEditStack';

export type Props = RecipeEditNavigationProps<'AllSet'>;

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.xxxl};
  margin-bottom: ${({ theme: { space } }) => space.l};
`;

const RecipeEditAllSet: React.FC<Props> = ({
  navigation,
}) => {
  const {
    state: {
      name,
      instructions,
      cookTime,
      tags,
    },
  } = useContext(RecipeEditContext);

  const onSubmit = () => {
    navigation.navigate('Recipes');
  };

  return (
    <SafeView full>
      <ScrollView>
        <Box px="xxxl">
          <Box my="xxl">
            <SavedIcon wrapperVariant="warning" />
          </Box>
          <Heading mb="s">Congratulations!</Heading>
          <Title mb="s">{name}</Title>
          <Heading mb="s">{`${cookTime} mins`}</Heading>
        </Box>
        {tags && tags.length > 0 && (
          <TagList horizontal showsHorizontalScrollIndicator={ false }>
            {tags.map((tag: string) => (
              <Box key={ tag } alignSelf="flex-start" mr="xs">
                <Tag value={ tag } />
              </Box>
            ))}
            <Box width="48px" />
          </TagList>
        )}
        <Column px="l">
          <RichTextInput editable={ false } initialContent={ instructions } />
        </Column>
      </ScrollView>
      <Box position="absolute" bottom="xxxl" right="xxxl">
        <IconButton variant="warning" onPress={ onSubmit }>
          <CheckIcon variant="inverted" />
        </IconButton>
      </Box>
    </SafeView>
  );
};

export default RecipeEditAllSet;

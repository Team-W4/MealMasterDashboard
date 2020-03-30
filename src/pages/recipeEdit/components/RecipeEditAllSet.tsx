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
import { SavedIcon, NextIcon } from '../../../components/Icons';
import Tag from '../../../components/Tag';

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.l};
  margin-bottom: ${({ theme: { space } }) => space.l};
`;

const RecipeEditAllSet: React.FC = () => {
  const {
    state: {
      name,
      instructions,
      cookTime,
      tags,
    },
  } = useContext(RecipeEditContext);

  const onSubmit = () => {
  };

  return (
    <SafeView full>
      <ScrollView>
        <Box px="l">
          <Box justifyContent="flex-end">
            <Box
              mb="l"
              width={ 50 }
              height={ 50 }
              borderRadius={ 25 }
              borderWidth={ 5 }
              borderColor="neoncarrot"
              alignItems="center"
              justifyContent="center"
            >
              <SavedIcon />
            </Box>
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
        <Column>
          <RichTextInput editable={ false } initialContent={ instructions } />
        </Column>
      </ScrollView>
      <Box position="absolute" bottom="xxxl" right="xxxl">
        <IconButton onPress={ onSubmit }>
          <NextIcon variant="warning" />
        </IconButton>
      </Box>
    </SafeView>
  );
};

export default RecipeEditAllSet;

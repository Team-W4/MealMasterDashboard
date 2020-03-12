import React, { useState, useEffect } from 'react';
import { LayoutAnimation } from 'react-native';
import { CustomLayoutSpring } from 'react-native-animation-layout';
import Input from '../Input';
import { Box, Grid } from '../../Containers';
import Tag from '../../Tag';
import { InputProps } from '..';

export type Props = InputProps;

const TagInput: React.FC<Props> = ({
  onChangeText,
  ...props
}) => {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);

  useEffect(() => {
    const nextTags = value.split(/[ ,]+/);

    if (nextTags.length !== tags.length || tags[0] === '') {
      LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
    }

    setTags(nextTags);
  }, [value]);

  return (
    <Box>
      <Input
        { ...props }
        multiline
        title="Tags"
        placeholder="Separate multiple tags by space or comma"
        value={ value }
        onChangeText={ (e) => {
          setValue(e);
          if (onChangeText) onChangeText(e);
        } }
      />
      <Grid mt="s" width="100%" flexWrap="wrap">
        {
          tags.map((tag) => (tag && tag.length > 0 ? (
            <Box key={ tag } mr="xs" mb="xs">
              <Tag value={ tag } />
            </Box>
          ) : (
            <></>
          )))
        }
      </Grid>
    </Box>
  );
};

export default TagInput;

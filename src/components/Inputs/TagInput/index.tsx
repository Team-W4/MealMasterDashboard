import React, { useState, useEffect } from 'react';
import Input from '../Input';
import { Box, Grid } from '../../Containers';
import Tag from '../../Tag';


export type Props = {

};

const TagInput: React.FC<Props> = () => {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);

  useEffect(() => {
    setTags(value.split(' '));
  }, [value]);

  return (
    <Box>
      <Input
        multiline
        title="Tags"
        value={ value }
        onChangeText={ (e) => setValue(e) }
      />
      <Grid width="100%" flexWrap="wrap">
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

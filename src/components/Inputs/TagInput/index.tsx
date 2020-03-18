import React, { useEffect } from 'react';
import { LayoutAnimation } from 'react-native';
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { useArray, useInput, useBoolean } from '../../../hooks';
import styled from '../../../styled';
import { Box } from '../../Containers';
import { Heading, Text } from '../../Texts';
import Tag from '../../Tag';
import InputWrapper from '../Input/InputWrapper';
import StyledInputField from '../Input/StyledInputField';
import { Props as InputProps } from '../Input';
import StyledInputWrapper, { Keys as SWKeys } from '../Input/StyledInputWrapper';

const TagInputWrapper = styled(StyledInputWrapper)`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: ${({ theme: { space } }) => space.m};
  padding-right: ${({ theme: { space } }) => space.m};
`;

export type Props = InputProps;

const TagInput: React.FC<Props> = ({
  title,
  variant,
  error,
  size,
  bordered,
  placeholder,
  onChangeText,
  ...props
}) => {
  const [focused, { setTrue, setFalse }] = useBoolean(false);

  let inputState: SWKeys = 'normal';
  if (focused) {
    inputState = 'active';
  } else if (error && error.length > 0) {
    inputState = 'error';
  }

  const input = useInput();
  const tags = useArray<string>([]);

  useEffect(() => {
    const inputValue = input.value;
    const lastChar = inputValue[inputValue.length - 1];

    if (lastChar === ' ' || lastChar === ',') {
      tags.add(inputValue.substring(0, inputValue.length - 1));
      input.clear();
    }
  }, [input]);

  useEffect(() => {
    LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
  }, [tags]);

  return (
    <InputWrapper>
      <Heading variant={ variant }>{title}</Heading>
      <TagInputWrapper bordered={ bordered } variant={ inputState }>
        {
          tags.value.map((tag, index) => (tag && tag.length > 0 ? (
            <Box key={ tag } mr="xs" mb="xs">
              <Tag
                value={ tag }
                onRemove={ () => tags.removeIndex(index) }
              />
            </Box>
          ) : (
            <></>
          )))
        }
        {/*
        // @ts-ignore */}
        <StyledInputField
          multiline={ false }
          variant={ variant }
          size={ size }
          onFocus={ () => setTrue() }
          onBlur={ () => setFalse() }
          value={ input.value }
          onChangeText={ input.onChangeText }
          placeholder={ tags.value.length > 0 ? '' : placeholder }
          { ...props }
        />
      </TagInputWrapper>
      {error && error.length > 0 ? (
        <Text mt="xs" variant="error" size="normal">
          {error}
        </Text>
      ) : (
        <></>
      )}
    </InputWrapper>
  );
};

TagInput.defaultProps = {
  bordered: true,
  size: 'normal',
  placeholder: 'Separate tags by space or comma',
};

export default TagInput;

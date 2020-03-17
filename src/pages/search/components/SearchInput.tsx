import React, { useRef, useEffect } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from '../../../styled';
import { Box, Grid, Column } from '../../../components/Containers';
import { DeleteIcon, SearchIcon } from '../../../components/Icons';
import { IconButton } from '../../../components/Buttons';

const StyledSearchInputWrapper = styled(Grid)`
  elevation: 10;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.background};
  box-shadow: 0 0 10px ${({ theme: { semanticColors } }) => semanticColors.shadow};
`;

const StyledSearchInput = styled.TextInput`
  font-family: 'SofiaProLight';
  padding-left: ${({ theme: { space } }) => space.s};
  padding-right: ${({ theme: { space } }) => space.s};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pica};
`;

export type Props = TextInputProps & {
  onClear?: () => void;
  focusOnMount?: boolean;
};

const SearchInput: React.FC<Props> = ({
  value,
  onClear,
  focusOnMount = false,
  ...props
}) => {
  const inputRef = useRef<TextInput>();
  useEffect(() => {
    if (focusOnMount) {
      inputRef?.current?.focus();
    }
  });

  return (
    <StyledSearchInputWrapper py="m" px="l" m="l">
      <Box mt="-1px">
        <SearchIcon />
      </Box>
      <Column justifyContent="center">
        <StyledSearchInput
          // @ts-ignore
          ref={ inputRef }
          value={ value }
          placeholder="What are you craving?"
          { ...props }
        />
      </Column>
      {value && value.length > 0 ? (
        <IconButton
          size="small"
          variant="transparent"
          onPress={ () => {
            inputRef?.current?.blur();
            if (onClear) {
              onClear();
            }
          } }
        >
          <DeleteIcon />
        </IconButton>
      ) : (
        <></>
      )}
    </StyledSearchInputWrapper>
  );
};

export default SearchInput;

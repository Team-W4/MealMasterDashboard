import React from 'react';
import { TextInputProps } from 'react-native';
import styled from '../../../styled';
import Box from '../../../components/Containers/Box';
import Grid, { Column } from '../../../components/Containers/Grid';
import SearchIcon from '../../../components/Icons/Search';
import DeleteIcon from '../../../components/Icons/Delete';
import IconButton from '../../../components/Buttons/IconButton';

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
  onClear: () => void;
};

const SearchInput: React.FC<Props> = ({
  value,
  onClear,
  ...props
}) => (
  <StyledSearchInputWrapper py="m" px="l" m="l">
    <Box mt="-1px">
      <SearchIcon />
    </Box>
    <Column justifyContent="center">
      <StyledSearchInput
        value={ value }
        placeholder="What are you craving?"
        { ...props }
      />
    </Column>
    {value && value.length > 0 ? (
      <IconButton
        size="small"
        variant="transparent"
        onPress={ onClear }
      >
        <DeleteIcon />
      </IconButton>
    ) : (
      <></>
    )}
  </StyledSearchInputWrapper>
);

export default SearchInput;

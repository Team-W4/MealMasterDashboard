/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from '../../../styled';
import Box from '../../../components/Containers/Box';
import SearchTab from '../components/SearchTab';

const SearchTabList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.xxxl};
  padding-top: ${({ theme: { space } }) => space.s};
  padding-bottom: ${({ theme: { space } }) => space.s};
`;

export type Props = any;

const SearchTabBarContainer: React.FC<Props> = ({
 state, descriptors, navigation,
}) => (
  <SearchTabList
    horizontal
    showsHorizontalScrollIndicator={ false }
  >
    {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <SearchTab
            key={ label }
            title={ label }
            active={ isFocused }
            onLongPress={ onLongPress }
            onPress={ onPress }
          />
        );
      })}
    <Box width="16px" />
  </SearchTabList>
);

export default SearchTabBarContainer;

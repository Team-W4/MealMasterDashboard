/* eslint-disable no-nested-ternary */
import React, { useRef } from 'react';
import { findNodeHandle, View, ScrollView } from 'react-native';
import styled from '../../../styled';
import { Box } from '../../../components/Containers';
import { SearchTabBarProps } from '../components/SearchTab';
import SearchTabLabel from '../components/SearchTabLabel';

const SearchTabList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.xxxl};
  padding-top: ${({ theme: { space } }) => space.s};
  padding-bottom: ${({ theme: { space } }) => space.s};
`;

export type Props = SearchTabBarProps & {
};

const SearchTabBarContainer: React.FC<Props> = ({
  state, descriptors, navigation,
}) => {
  const scrollRef = useRef<ScrollView>();

  return (
    <SearchTabList
      // @ts-ignore
      ref={ scrollRef }
      horizontal
      showsHorizontalScrollIndicator={ false }
    >
      {state.routes.map((route, index: number) => {
        let menuItemRef: View | null;

        const { options } = descriptors[route.key];
        // @ts-ignore
        const label: string = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }

          if (scrollRef && scrollRef.current && menuItemRef) {
            menuItemRef.measureLayout(
              // @ts-ignore
              findNodeHandle(scrollRef.current), (x: number) => scrollRef.current.scrollTo({
                x: x <= 32 ? 0 : x,
                y: 0,
                animated: true,
              }), () => {},
            );
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Box
            key={ route.name }
            ref={ (ref) => { menuItemRef = ref } }
          >
            <SearchTabLabel
              title={ label }
              active={ isFocused }
              onLongPress={ onLongPress }
              onPress={ onPress }
            />
          </Box>
        );
      })}
      <Box width="16px" />
    </SearchTabList>
  );
}

export default SearchTabBarContainer;

import React, { useState, useEffect, useRef } from 'react';
import { LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// @ts-ignore
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { searchActions } from '../../../actions';
import Box from '../../../components/Containers/Box';
import SearchInput from '../components/SearchInput';
import SearchFoodTab from './SearchFoodTab';
import SearchRecipeTab from './SearchRecipeTab';
import SearchTabBar from './SearchTabBarContainer';

export type Props = {
  clearSearch: () => void;
  onSearchFood: (term: string) => void;
  onSearchRecipe: (term: string) => void;
};

const SearchTab = createMaterialTopTabNavigator();

const SearchPage: React.FC<Props> = ({
  clearSearch,
  onSearchFood,
  onSearchRecipe,
}) => {
  const prevSearch = useRef<string>();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (prevSearch.current !== searchTerm) {
      prevSearch.current = searchTerm;
    }

    onSearchFood(searchTerm);
    onSearchRecipe(searchTerm);

    LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
  }, [searchTerm]);

  return (
    <Box flexGrow={ 1 } width="100%">
      <SearchInput
        value={ searchTerm }
        onClear={ () => {
          setSearchTerm('');
          clearSearch();
        } }
        onChangeText={ (e: string) => setSearchTerm(e) }
      />
      <SearchTab.Navigator
        tabBar={ (props: any) => <SearchTabBar { ...props } /> }
      >
        <SearchTab.Screen
          name="SearchFoods"
          component={ SearchFoodTab }
          options={{
            tabBarLabel: 'Foods',
          }}
        />
        <SearchTab.Screen
          name="SearchRecipes"
          component={ SearchRecipeTab }
          options={{
            tabBarLabel: 'Recipes',
          }}
        />
        <SearchTab.Screen
          name="SearchUsers"
          component={ SearchRecipeTab }
          options={{
            tabBarLabel: 'Users',
          }}
        />
        <SearchTab.Screen
          name="SearchTags"
          component={ SearchRecipeTab }
          options={{
            tabBarLabel: 'Tags',
          }}
        />
      </SearchTab.Navigator>
    </Box>
  );
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      clearSearch: searchActions.clearSearch,
      onSearchFood: searchActions.searchFoods,
      onSearchRecipe: searchActions.searchRecipes,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(SearchPage);

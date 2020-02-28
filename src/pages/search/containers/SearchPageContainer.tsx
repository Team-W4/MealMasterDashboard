import React, { useState, useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { genericFoodActions, recipeActions } from '../../../actions';
import colors from '../../../styled/variables/colors';
import Box from '../../../components/Containers/Box';
import SearchBar from '../components/SearchBar';
import SearchFoodTab from '../components/SearchFoodTab';
import SearchRecipeTab from '../components/SearchRecipeTab';

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
  }, [searchTerm]);

  return (
    <Box flexGrow={ 1 } width="100%">
      <SearchBar
        value={ searchTerm }
        onClear={ clearSearch }
        onChangeText={ (e: string) => setSearchTerm(e) }
      />
      <SearchTab.Navigator
        tabBarOptions={{
          activeTintColor: colors.black,
          inactiveTintColor: colors.athensgray,
          indicatorStyle: {
            backgroundColor: colors.neoncarrot,
            borderRadius: 20,
            height: 5,
            width: 50,
            bottom: 20,
            left: 35,
          },
          labelStyle: {
            fontFamily: 'SofiaProRegular',
            fontSize: 20,
            textTransform: 'capitalize',
          },
        }}
      >
        <SearchTab.Screen
          name="SearchFood"
          component={ SearchFoodTab }
          options={{
            tabBarLabel: 'foods',
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
      clearSearch: genericFoodActions.clearSearch,
      onSearchFood: genericFoodActions.searchGenericFood,
      onSearchRecipe: recipeActions.searchRecipes,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(SearchPage);

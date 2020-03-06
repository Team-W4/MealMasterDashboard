import React, { useState, useEffect, useRef } from 'react';
import { LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// @ts-ignore
import { CustomLayoutSpring } from 'react-native-animation-layout';
import { searchActions } from '../../../actions';
import SafeView from '../../../components/SafeView';
import SearchTab from '../components/SearchTab';
import SearchInput from '../components/SearchInput';
import SearchFoodTab from './SearchFoodTab';
import SearchRecipeTab from './SearchRecipeTab';
import SearchTabBar from './SearchTabBarContainer';

export type Props = {
  onSearchFood: (term: string) => void;
  onSearchRecipe: (term: string) => void;
  onSearchUser: (term: string) => void;
};

const SearchPage: React.FC<Props> = ({
  onSearchFood,
  onSearchRecipe,
  onSearchUser,
}) => {
  const prevSearch = useRef<string>();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (prevSearch.current !== searchTerm) {
      prevSearch.current = searchTerm;
    }

    onSearchFood(searchTerm);
    onSearchRecipe(searchTerm);
    onSearchUser(searchTerm);

    LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
  }, [searchTerm]);

  return (
    <SafeView full>
      <SearchInput
        value={ searchTerm }
        onClear={ () => {
          setSearchTerm('');
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
    </SafeView>
  );
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
      onSearchFood: searchActions.searchFoods,
      onSearchRecipe: searchActions.searchRecipes,
      onSearchUser: searchActions.searchUsers,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(SearchPage);

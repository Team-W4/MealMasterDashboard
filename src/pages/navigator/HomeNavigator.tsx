import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import colors from '../../styled/variables/colors';
import HomeOutlineIcon from '../../components/Icons/HomeOutline';
import SearchIcon from '../../components/Icons/Search';
import SavedIcon from '../../components/Icons/Saved';
import StockIcon from '../../components/Icons/Stock';
import TitlePage from '../title';
import HomePage from '../home';
import SearchPage from '../search';
import RecipesPage from '../recipes';
import StockPage from '../stock';

const Tab = createMaterialBottomTabNavigator();

const RootPage: React.FC = () => (
  <>
    <TitlePage title="Good morning" />
    <Tab.Navigator initialRouteName="Home" shifting activeColor={colors.white}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarColor: colors.neoncarrot,
          tabBarLabel: 'Home',
          tabBarIcon: () => <HomeOutlineIcon variant="inverted" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarColor: colors.orange,
          tabBarLabel: 'Search',
          tabBarIcon: () => <SearchIcon variant="inverted" />,
        }}
      />
      <Tab.Screen
        name="Stocks"
        component={StockPage}
        options={{
          tabBarColor: colors.neoncarrot,
          tabBarLabel: 'Stocks',
          tabBarIcon: () => <StockIcon variant="inverted" />,
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={RecipesPage}
        options={{
          tabBarColor: colors.orange,
          tabBarLabel: 'Recipes',
          tabBarIcon: () => <SavedIcon variant="inverted" />,
        }}
      />
    </Tab.Navigator>
  </>
);

export default RootPage;

import React, { useEffect } from 'react';
import { Platform, UIManager } from 'react-native';
import {
  HomeOutlineIcon, SearchIcon, SavedIcon, StockIcon,
} from '../../components/Icons';
import colors from '../../styled/variables/colors';
import TitlePage from '../title';
import HomePage from '../home';
import DiscoverPage from '../discover';
import RecipesPage from '../recipes';
import StockPage from '../stock';
import HomeTab from './HomeTab';


const HomeNavigator: React.FC = () => {
  useEffect(() => {
    if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    <>
      <TitlePage />
      <HomeTab.Navigator
        initialRouteName="Home"
        shifting
        backBehavior="none"
        activeColor={ colors.white }
      >
        <HomeTab.Screen
          name="Home"
          component={ HomePage }
          options={{
            tabBarColor: colors.neoncarrot,
            tabBarLabel: 'Home',
            tabBarIcon: () => <HomeOutlineIcon variant="inverted" />,
          }}
        />
        <HomeTab.Screen
          name="Discover"
          component={ DiscoverPage }
          options={{
            tabBarColor: colors.orange,
            tabBarLabel: 'Discover',
            tabBarIcon: () => <SearchIcon variant="inverted" />,
          }}
        />
        <HomeTab.Screen
          name="Stocks"
          component={ StockPage }
          options={{
            tabBarColor: colors.neoncarrot,
            tabBarLabel: 'Stocks',
            tabBarIcon: () => <StockIcon variant="inverted" />,
          }}
        />
        <HomeTab.Screen
          name="Recipes"
          component={ RecipesPage }
          options={{
            tabBarColor: colors.orange,
            tabBarLabel: 'Recipes',
            tabBarIcon: () => <SavedIcon variant="inverted" />,
          }}
        />
      </HomeTab.Navigator>
    </>
  );
};

export default HomeNavigator;

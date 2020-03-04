import React, { useEffect } from 'react';
import { Platform, UIManager } from 'react-native';
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
        {/* <HomeTab.Screen
          name="Search"
          component={ SearchPage }
          options={{
            tabBarColor: colors.orange,
            tabBarLabel: 'Search',
            tabBarIcon: () => <SearchIcon variant="inverted" />,
          }}
        /> */}
        <HomeTab.Screen
          name="Stocks"
          component={ StockPage }
          options={{
            tabBarColor: colors.orange,
            tabBarLabel: 'Stocks',
            tabBarIcon: () => <StockIcon variant="inverted" />,
          }}
        />
        <HomeTab.Screen
          name="Recipes"
          component={ RecipesPage }
          options={{
            tabBarColor: colors.neoncarrot,
            tabBarLabel: 'Recipes',
            tabBarIcon: () => <SavedIcon variant="inverted" />,
          }}
        />
      </HomeTab.Navigator>
    </>
  );
}

export default HomeNavigator;

import React, { useEffect } from 'react';
import { Platform, UIManager, Dimensions } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { Box } from '../../components/Containers';
import {
  HomeOutlineIcon, SearchIcon, SavedIcon, StockIcon,
} from '../../components/Icons';
import colors from '../../styled/variables/colors';
import TitlePage from '../title';
import HomePage from '../home';
import SearchPage from '../search';
import AddMenu from '../add';
import RecipesPage from '../recipes';
import StockPage from '../stock';
import HomeTab from './HomeTab';

const { width: DEVICE_WIDTH } = Dimensions.get('window');

const HomeNavigator: React.FC = () => {
  const { bottom: botInset } = useSafeArea();

  useEffect(() => {
    if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    <>
      <TitlePage />
      <HomeTab.Navigator
        shifting
        initialRouteName="Home"
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
          name="Search"
          component={ SearchPage }
          options={{
            tabBarColor: colors.orange,
            tabBarLabel: 'Discover',
            tabBarIcon: () => <SearchIcon variant="inverted" />,
          }}
        />
        <HomeTab.Screen
          name="AddMenu"
          component={ AddMenu }
          options={{
            tabBarLabel: '',
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
      <Box position="absolute" bottom={ botInset + 54 } left={ DEVICE_WIDTH / 2 - 100 }>
        <AddMenu />
      </Box>
    </>
  );
};

export default HomeNavigator;

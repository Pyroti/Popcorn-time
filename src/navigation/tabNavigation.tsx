import React from 'react';
import { t } from 'i18next';
import { ParamListBase } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import { TabStack } from '../constants/stack';
import Profile from '../screens/profile/Profile';
import LightTheme from '../constants/theme';

export interface TabStackParamList extends ParamListBase {
  [TabStack.Home]: undefined;
  [TabStack.Profile]: undefined;
}

type IconsType = {
  [TabStack.Home]: string;
  [TabStack.Profile]: string;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator: React.FC = () => (
  <Tab.Navigator
    initialRouteName={TabStack.Home}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons: IconsType = {
          [TabStack.Home]: 'home',
          [TabStack.Profile]: 'user',
        };
        return (
          <SimpleLineIcons name={icons[route.name as keyof IconsType]} color={color} size={size} />
        );
      },
      tabBarActiveTintColor: LightTheme.colors.main,
    })}
  >
    <Tab.Screen
      name={TabStack.Home}
      component={Home}
      options={{
        headerShown: false,
        headerTitle: t('header.home'),
        title: t('header.home'),
        headerShadowVisible: false,
      }}
    />
    <Tab.Screen
      name={TabStack.Profile}
      component={Profile}
      options={{
        headerShown: false,
        title: t('header.profile'),
        headerShadowVisible: false,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;

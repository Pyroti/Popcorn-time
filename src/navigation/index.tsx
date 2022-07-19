import React from 'react';
import { NavigatorScreenParams, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { t } from 'i18next';
import { useTypedSelector } from '../hooks/useTypeSelector';
import authSelector from '../store/selector/authSelector';
import { AuthStack, MainStack, TabStack } from '../constants/stack';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';
import TabNavigator, { TabStackParamList } from './tabNavigation';

export interface AuthStackParamList extends ParamListBase {
  [AuthStack.SignIn]: undefined;
  [AuthStack.SignUp]: undefined;
}

export interface MainStackParamList extends ParamListBase {
  [MainStack.Tab]: NavigatorScreenParams<TabStackParamList>;
}

const Stack = createNativeStackNavigator<AuthStackParamList | MainStackParamList>();

const AuthenticationNavigationStack = () => (
  <Stack.Navigator initialRouteName={AuthStack.SignIn}>
    <Stack.Screen
      name={AuthStack.SignIn}
      component={SignIn}
      options={{
        headerTitle: t('header.signIn'),
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name={AuthStack.SignUp}
      component={SignUp}
      options={{
        headerTitle: t('header.signUp'),
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

const MainNavigationStack = () => (
  <Stack.Navigator initialRouteName={TabStack.Home}>
    <Stack.Screen name={MainStack.Tab} component={TabNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const Navigator = () => {
  const { currentUser } = useTypedSelector(authSelector);

  return !currentUser ? AuthenticationNavigationStack() : MainNavigationStack();
};

export default Navigator;

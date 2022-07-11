import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { t } from 'i18next';
import { useTypedSelector } from '../hooks/useTypeSelector';
import authSelector from '../store/selector/authSelector';
import { AuthStack, MainStack } from '../constants/stack';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';
import Home from '../screens/home/Home';

export interface AuthStackParamList extends ParamListBase {
  [AuthStack.SignIn]: undefined;
  [AuthStack.SignUp]: undefined;
}

export interface MainStackParamList extends ParamListBase {
  [MainStack.Home]: undefined;
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
  <Stack.Navigator initialRouteName={MainStack.Home}>
    <Stack.Screen
      name={MainStack.Home}
      component={Home}
      options={{
        headerTitle: t('header.home'),
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

const Navigator = () => {
  const { currentUser } = useTypedSelector(authSelector);

  return !currentUser ? AuthenticationNavigationStack() : MainNavigationStack();
};

export default Navigator;

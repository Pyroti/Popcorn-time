import React from 'react';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import authSelector from '../../store/selector/authSelector';
import { keyboardAvoidingBehavior } from '../../constants/keyboardAvoidingBehavior';
import { Text } from '../../components/styles/globalStyled';
import { HomeHeaderContainer, HomeProfileContainer, HomeView } from './style';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const { currentUser } = useTypedSelector(authSelector);

  return (
    <KeyboardAvoidingView behavior={keyboardAvoidingBehavior}>
      <HomeView onPress={Keyboard.dismiss}>
        <HomeHeaderContainer>
          <HomeProfileContainer>
            <Text>{t('home.hello')}</Text>
            <Text>{currentUser?.displayName}</Text>
          </HomeProfileContainer>
          <IconIonicons size={scale(25)} name="notifications-outline" />
        </HomeHeaderContainer>
      </HomeView>
    </KeyboardAvoidingView>
  );
};

export default Home;

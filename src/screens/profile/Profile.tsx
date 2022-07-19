import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { scale } from 'react-native-size-matters';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { keyboardAvoidingBehavior } from '../../constants/keyboardAvoidingBehavior';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { logoutFirebase } from '../../store/actions/auth/logoutAction';
import authSelector from '../../store/selector/authSelector';
import { hideEmail } from '../../utils/hideEmail';
import { ProfileGradient, ProfileGradientText, ProfileView } from './style';
import Button from '../../components/buttons/button/button';
import LightTheme from '../../constants/theme';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { currentUser } = useTypedSelector(authSelector);

  const logout = () => {
    dispatch(logoutFirebase());
  };

  return (
    <KeyboardAvoidingView behavior={keyboardAvoidingBehavior}>
      <ProfileView onPress={Keyboard.dismiss}>
        <ProfileGradient
          colors={[LightTheme.colors.gradientLeft, LightTheme.colors.gradientRight]}
          start={{ x: 1, y: 0 }}
        >
          <ProfileGradientText>{currentUser?.displayName}</ProfileGradientText>
          <ProfileGradientText>{hideEmail(currentUser?.email)}</ProfileGradientText>
        </ProfileGradient>
        <Button
          text={t('auth.logout')}
          onPress={logout}
          iconLeft={<IconIonicons size={scale(23)} name="ios-log-out-outline" />}
        />
      </ProfileView>
    </KeyboardAvoidingView>
  );
};

export default Profile;

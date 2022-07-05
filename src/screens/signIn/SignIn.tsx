import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import { TAuthStackScreenProps } from '../../navigation';
import {
  AuthTextInputContainer,
  AuthTitle,
  AuthView,
  SingUpButton,
  Spoiler,
  SupportContainer,
} from '../../components/authStyles';
import AuthTextInput from '../../components/inputs/authTextInput/authTextInput';
import AuthButton from '../../components/buttons/authButton/authButton';

const SignIn: React.FC<TAuthStackScreenProps> = ({ navigation }) => {
  const [isSecurity, setIsSecurity] = useState(true);

  const { t } = useTranslation();

  const changeSecurityPassword = () => {
    setIsSecurity((prevIsSecurity) => !prevIsSecurity);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email(t('errors.invalidMail')).required(t('requiredField')),
    password: yup.string().min(6, t('errors.invalidPassword')).required(t('errors.requiredField')),
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <AuthView onPress={Keyboard.dismiss}>
        <AuthTitle>{t('auth.welcome')}</AuthTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <AuthTextInputContainer>
              <AuthTextInput
                label={t('auth.email')}
                placeholder={t('auth.enterEmail')}
                onChangeText={handleChange('email')}
                value={values.email}
                hasError={touched.email && !!errors.email}
                errorText={errors.email}
                iconLeft={<IconEvilIcons size={22} name="envelope" />}
              />
              <AuthTextInput
                label={t('auth.password')}
                placeholder={t('auth.enterPassword')}
                secureTextEntry={isSecurity}
                onChangeText={handleChange('password')}
                value={values.password}
                hasError={touched.password && !!errors.password}
                errorText={errors.password}
                iconLeft={<IconEvilIcons size={25} name="lock" />}
                iconRight={
                  <IconIonicons
                    size={20}
                    name={isSecurity ? 'eye-outline' : 'eye-off-outline'}
                    onPress={changeSecurityPassword}
                  />
                }
              />
              <AuthButton text={t('auth.signIn')} onPress={handleSubmit} />
            </AuthTextInputContainer>
          )}
        </Formik>
        <SupportContainer>
          <Spoiler>{t('auth.dontHaveAnAccount')}</Spoiler>
          <SingUpButton onPress={() => navigation.navigate('SignUp')}>
            {t('auth.signUp')}
          </SingUpButton>
        </SupportContainer>
      </AuthView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

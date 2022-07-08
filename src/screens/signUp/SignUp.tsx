import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { TAuthStackScreenProps } from '../../navigation';
import {
  AuthTextInputContainer,
  AuthView,
  SingUpButton,
  Spoiler,
  SupportContainer,
} from '../../components/authStyles';
import AuthTextInput from '../../components/inputs/authTextInput/authTextInput';
import AuthButton from '../../components/buttons/authButton/authButton';
import { registerFirabase } from '../../store/actions/auth/registerAction';

const SignUp: React.FC<TAuthStackScreenProps> = ({ navigation }) => {
  const [isSecurity, setIsSecurity] = useState(true);
  const [isSecurityConfirm, setIsSecurityConfirm] = useState(true);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const changeSecurityPassword = () => {
    setIsSecurity((prevIsSecurity) => !prevIsSecurity);
  };

  const changeSecurityConfirmPassword = () => {
    setIsSecurityConfirm((prevIsSecurityConfirm) => !prevIsSecurityConfirm);
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('errors.requiredField')),
    email: yup.string().email(t('errors.invalidMail')).required(t('errors.requiredField')),
    password: yup.string().min(6, t('errors.invalidPassword')).required(t('errors.requiredField')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], t('errors.invalidConfirmPassword'))
      .required(t('errors.requiredField')),
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <AuthView onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const { email, password, name } = values;
            dispatch(registerFirabase(email, password, name));
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <AuthTextInputContainer>
              <AuthTextInput
                label={t('auth.userName')}
                placeholder={t('auth.enterName')}
                onChangeText={handleChange('name')}
                value={values.name}
                hasError={touched.name && !!errors.name}
                errorText={errors.name}
              />
              <AuthTextInput
                label={t('auth.email')}
                placeholder={t('auth.enterEmail')}
                onChangeText={handleChange('email')}
                value={values.email}
                hasError={touched.email && !!errors.email}
                errorText={errors.email}
              />
              <AuthTextInput
                label={t('auth.password')}
                placeholder={t('auth.enterPassword')}
                secureTextEntry={isSecurity}
                onChangeText={handleChange('password')}
                value={values.password}
                hasError={touched.password && !!errors.password}
                errorText={errors.password}
                iconRight={
                  <IconIonicons
                    size={20}
                    name={isSecurity ? 'eye-outline' : 'eye-off-outline'}
                    onPress={changeSecurityPassword}
                  />
                }
              />
              <AuthTextInput
                label={t('auth.confirmPassword')}
                placeholder={t('auth.confirmYourPassword')}
                secureTextEntry={isSecurityConfirm}
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                hasError={touched.confirmPassword && !!errors.confirmPassword}
                errorText={errors.confirmPassword}
                iconRight={
                  <IconIonicons
                    size={20}
                    name={isSecurityConfirm ? 'eye-outline' : 'eye-off-outline'}
                    onPress={changeSecurityConfirmPassword}
                  />
                }
              />
              <AuthButton text={t('auth.signUp')} onPress={handleSubmit} />
            </AuthTextInputContainer>
          )}
        </Formik>
        <SupportContainer>
          <Spoiler>{t('auth.haveAnAccount')}</Spoiler>
          <SingUpButton onPress={() => navigation.navigate('SignIn')}>
            {t('auth.signIn')}
          </SingUpButton>
        </SupportContainer>
      </AuthView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

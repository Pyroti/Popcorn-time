import React, { useEffect, useState } from 'react';
import { LayoutAnimation, TextInputProps } from 'react-native';
import LightTheme from '../../../constants/theme';
import {
  AuthErrorText,
  AuthIcon,
  AuthLabelText,
  AuthInput,
  AuthView,
  AuthViewContainer,
  AuthViewLeftContent,
} from './style';

interface AuthTextInputProps extends TextInputProps {
  errorText?: string;
  hasError?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label?: string;
}

const AuthTextInput: React.FC<AuthTextInputProps> = ({
  value,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  editable = true,
  hasError = false,
  label,
  onChangeText,
  iconLeft,
  iconRight,
  errorText = '',
  placeholderTextColor = LightTheme.colors.textGray,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }, [hasError]);

  const makeOutline = () => {
    setIsFocused(true);
  };

  const removeOutline = () => {
    setIsFocused(false);
  };

  return (
    <>
      <AuthViewContainer>
        <AuthView isFocused={isFocused}>
          <AuthViewLeftContent>
            <AuthIcon>{iconLeft}</AuthIcon>
            <AuthInput
              {...rest}
              editable={editable}
              autoCapitalize="none"
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}
              onFocus={makeOutline}
              onBlur={removeOutline}
            />
          </AuthViewLeftContent>
          <AuthIcon>{iconRight}</AuthIcon>
        </AuthView>
        <AuthLabelText>{label}</AuthLabelText>
      </AuthViewContainer>
      {hasError && <AuthErrorText>{errorText}</AuthErrorText>}
    </>
  );
};

export default AuthTextInput;

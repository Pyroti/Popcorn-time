import React from 'react';
import { AuthButtonText, AuthButtonView } from './style';

interface authButtonProps {
  text: string;
  onPress: () => void;
}

const AuthButton: React.FC<authButtonProps> = ({ text = '', onPress }) => (
  <AuthButtonView onPress={onPress}>
    <AuthButtonText>{text}</AuthButtonText>
  </AuthButtonView>
);

export default AuthButton;

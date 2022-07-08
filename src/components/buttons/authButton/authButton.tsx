import React from 'react';
import { AText, AView } from './style';

interface authButtonProps {
  text: string;
  onPress: () => void;
}

const AuthButton: React.FC<authButtonProps> = ({ text = '', onPress }) => (
  <AView onPress={onPress}>
    <AText>{text}</AText>
  </AView>
);

export default AuthButton;

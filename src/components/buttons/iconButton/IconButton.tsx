import React from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { IconImage } from './style';

interface iconButtonProps {
  link: ImageSourcePropType;
  onPress: () => void;
}

const IconButton: React.FC<iconButtonProps> = ({ link, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <IconImage source={link} />
  </TouchableOpacity>
);

export default IconButton;

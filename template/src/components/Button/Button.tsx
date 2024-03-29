import React, { memo } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { StyledButton } from '../Styled/Button';
import { StyledLabel } from '../Styled/Label';

interface ButtonProps {
  label: string;
  labelStyle?: TextStyle;
  style?: ViewStyle;
  onPress: () => void;
}

const ButtonComponent = ({ label, labelStyle, style, onPress }: ButtonProps) => (
  <StyledButton containerStyle={style} onPress={onPress}>
    <StyledLabel style={labelStyle}>{label}</StyledLabel>
  </StyledButton>
);

export const Button = memo(ButtonComponent);

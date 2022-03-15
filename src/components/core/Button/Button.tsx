import * as React from 'react';
import styled from 'styled-components';

import MuiButton from '@mui/material/Button';

export type ButtonType = {
  label: string;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
  sx?: object;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button: React.FC<ButtonType> = props => {
  const {
    label,
    color = 'primary',
    size = 'medium',
    variant = 'contained',
    sx,
    onClick,
    disabled,
  } = props;

  return (
    <MuiButton
      color={color}
      size={size}
      variant={variant}
      sx={sx}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
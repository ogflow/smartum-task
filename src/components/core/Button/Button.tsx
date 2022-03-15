import * as React from 'react';
import styled from 'styled-components';

import MuiButton from '@mui/material/Button';

export type ButtonType = {
  label: string;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
  sx?: object;
};

const Button: React.FC<ButtonType> = props => {
  const {
    label,
    color = 'primary',
    size = 'medium',
    variant = 'contained',
    sx,
  } = props;

  return (
    <MuiButton
      color={color}
      size={size}
      variant={variant}
      sx={sx}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
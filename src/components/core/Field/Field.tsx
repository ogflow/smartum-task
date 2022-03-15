import * as React from 'react';

import TextField from '@mui/material/TextField';

export type FieldType = {
  id: string;
  label: string;
  required?: boolean;
};

const Field: React.FC<FieldType> = props => {
  const {
    id,
    label,
    required,
  } = props;

  return (
    <TextField
      id={id}
      label={label}
      required={required}
      margin='normal'
    />
  );
};

export default Field;
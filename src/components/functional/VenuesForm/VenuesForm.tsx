import * as React from 'react';
import styled from 'styled-components';

import FormGroup from '@mui/material/FormGroup';
import Field from '../../core/Field/Field';
import { Typography } from '@mui/material';
import Button from '../../core/Button/Button';

export type VenuesFormType = {

};

const VenuesForm: React.FC<VenuesFormType> = () => {
  return (
    <StyledFormGroup>
      <Typography
        variant='h2'
        align='center'
        gutterBottom={true}
      >
        Find Venues
      </Typography>
      <Field
        id='latitude'
        label='Latitude'
        required={true}
      />
      <Field
        id='longitude'
        label='Longitude'
        required={true}
      />
      <Field
        id='distance'
        label='Distance'
        required={true}
      />
      <Button
        label='Submit'
        size='large'
        sx={{
          marginTop: '1em'
        }}
      />
    </StyledFormGroup>
  );
};

export default VenuesForm;

const StyledFormGroup = styled(FormGroup)`
  width: 25em;
`;
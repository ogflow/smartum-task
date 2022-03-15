import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import Button from '../../core/Button/Button';
import mathHelper from 'src/business/helpers/mathHelper';
import TextField from '@mui/material/TextField';

export type VenuesFormType = {
  handleRequest: Function;
};

const VenuesForm: React.FC<VenuesFormType> = props => {
  const { handleRequest } = props;

  const [latitude, setLatitude] = useState<any>('');
  const [longitude, setLongitude] = useState<any>('');
  const [distance, setDistance] = useState<any>('');
  const [latitudeValid, setLatitudeValid] = useState<boolean>(undefined);
  const [longitudeValid, setLongitudeValid] = useState<boolean>(undefined);
  const [distanceValid, setDistanceValid] = useState<boolean>(undefined);

  const handleClick = () => {
    const isValid = latitudeValid && longitudeValid && distanceValid;

    if (!isValid) return;

    handleRequest(latitude, longitude, distance);
  };

  return (
    <StyledFormGroup>
      <Typography
        variant='h2'
        align='center'
        gutterBottom={true}
      >
        Find Venues
      </Typography>
      <TextField
        id='latitude'
        label='Latitude'
        margin='normal'
        required={true}
        error={latitudeValid === false}
        InputProps={{
          value: latitude,
          onChange: (e) => {
            setLatitude(e.target.value);
            setLatitudeValid(mathHelper.isBetween(-90, 90, e.target.value));
          }
        }}
        inputProps={{
          min: -90,
          max: 90,
        }}
      />
      <TextField
        id='longitude'
        label='Longitude'
        margin='normal'
        required={true}
        error={longitudeValid === false}
        InputProps={{
          value: longitude,
          onChange: (e) => {
            setLongitude(e.target.value);
            setLongitudeValid(mathHelper.isBetween(-180, 180, e.target.value))
          }
        }}
        inputProps={{
          min: -180,
          max: 180,
        }}
      />
      <TextField
        id='distance'
        label='Distance'
        margin='normal'
        required={true}
        error={distanceValid === false}
        InputProps={{
          value: distance,
          onChange: (e) => {
            setDistance(e.target.value);
            setDistanceValid(mathHelper.isBetween(0, 100000, e.target.value))
          }
        }}
        inputProps={{
          min: 0,
          max: 100000,
        }}
      />
      <Button
        label='Submit'
        size='large'
        sx={{ marginTop: '1em' }}
        onClick={handleClick}
        disabled={!latitudeValid || !longitudeValid || !distanceValid}
      />
    </StyledFormGroup>
  );
};

export default VenuesForm;

const StyledFormGroup = styled(FormGroup)`
  width: 25em;
`;
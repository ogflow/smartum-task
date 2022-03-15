import * as React from 'react';
import styled from 'styled-components';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VenuesType from 'src/types/venues/VenuesType';

export type VenueCardType = {
  data: VenuesType;
};

const VenueCard: React.FC<VenueCardType> = ({data}) => {
  const {
    name,
  } = data;

  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VenueCard;
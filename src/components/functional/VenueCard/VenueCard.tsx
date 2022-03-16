import * as React from 'react';
import styled from 'styled-components';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VenuesType from 'src/types/venues/VenuesType';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Language';

export type VenueCardType = {
  data: VenuesType;
};

const VenueCard: React.FC<VenueCardType> = ({data}) => {
  const {
    name,
    description,
    phone,
    email,
    website,
    address,
  } = data;

  return (
    <StyledCard>
      <CardContent>
        <Typography variant='h5'>
          {name}
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          {address.line1}
        </Typography>
        <Typography variant='body1'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {phone && (
          <IconButton
            aria-label='Call the Venue'
            href={`tel:${phone}`}
          >
            <CallIcon/>
          </IconButton>
        )}
        {email && (
          <IconButton
            aria-label='Send an email to the Venue'
            href={`mailto:${email}`}
          >
            <EmailIcon/>
          </IconButton>
        )}
        {website && (
          <IconButton
            aria-label='Open website'
            href={website}
          >
            <WebIcon/>
          </IconButton>
        )}
      </CardActions>
    </StyledCard>
  );
};

export default VenueCard;

const StyledCard = styled(Card)`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 40em;
  }
`;
import * as React from 'react';
import { useState } from 'react';
import VenuesType from 'src/types/venues/VenuesType';
import styled from 'styled-components';

import venuesApiService from '../../../business/requests/venuesApiService';
import VenuesForm from '../../functional/VenuesForm/VenuesForm';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import VenueCard from 'src/components/functional/VenueCard/VenueCard';

const VenuesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<VenuesType[]>([]);

  const handleRequest = (latitude, longitude, distance) => {
    setIsLoading(true);
    venuesApiService
    .getVenues(latitude, longitude, distance)
    .then(res => {
      setData(res.data.data);
      setIsLoading(false);
    });
  }

  return (
    <Root>
      <VenuesForm
        handleRequest={handleRequest}
      />
      {isLoading && !data && (
        <CircularProgress/>
      )}
      {data && (
        <StyledStack gap='1em'>
          {data.map(venue => (
            <VenueCard
              key={venue.id}
              data={venue}
            />
          ))}
        </StyledStack>
      )}
    </Root>
  );
};

export default VenuesPage;

const Root = styled.div`
  background: #BAE6FD;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 8em 2em;
`;

const StyledStack = styled(Stack)`
  margin-top: 4em;
`;
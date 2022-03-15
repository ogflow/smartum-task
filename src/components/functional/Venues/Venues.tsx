import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export type VenuesType = {

};

const Venues: React.FC<VenuesType> = props => {
  return (
    <Root>
      Venues
    </Root>
  );
};

export default Venues;

const Root = styled(Paper)`
`;
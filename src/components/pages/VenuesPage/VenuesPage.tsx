import * as React from 'react';
import styled from 'styled-components';
import VenuesForm from '../../functional/VenuesForm/VenuesForm';

export type VenuesPageType = {

};

const VenuesPage: React.FC<VenuesPageType> = () => {
  return (
    <Root>
      <VenuesForm/>
    </Root>
  );
};

export default VenuesPage;

const Root = styled.div`
  background: #BAE6FD;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
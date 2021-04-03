import React from 'react';
import {SwapiServiceConsumer} from '../SwapiServiceContext/SwapiServiceContext';

const WithSwapiService = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        { (swapiService) => <Wrapped {...props} swapiService={swapiService}/> }
      </SwapiServiceConsumer>
    )
  }
}

export default WithSwapiService;
import React from 'react';
import Row from '../Row/Row';
import {StarshipDetails, StarshipList} from '../sw-components';

const StarshipPage = () => {
  return (
    <Row left={<StarshipList/>} right={<StarshipDetails itemId={5}/>}/>
  )
}

export default StarshipPage;
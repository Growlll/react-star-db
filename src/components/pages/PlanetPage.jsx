import React from 'react';
import Row from '../Row/Row';
import {PlanetDetails, PlanetList} from '../sw-components';

const PlanetPage = () => {
  return (
    <Row left={<PlanetList/>} right={<PlanetDetails itemId={5}/>}/>
  )
}

export default PlanetPage;
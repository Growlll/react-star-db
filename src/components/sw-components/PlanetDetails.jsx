import React from 'react';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import WithSwapiService from '../hoc-helpers/WithSwapiService';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field='model' label='Model'/>
      <Record field='length' label='Length'/>
      <Record field='costInCredits' label='Cost'/>
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default WithSwapiService(PlanetDetails, mapMethodsToProps);
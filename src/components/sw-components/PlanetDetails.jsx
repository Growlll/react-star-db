import React from 'react';
import {SwapiServiceConsumer} from '../SwapiServiceContext/SwapiServiceContext';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';

const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPlanet}
              getImageUrl={getPlanetImage}>

              <Record field='model' label='Model'/>
              <Record field='length' label='Length'/>
              <Record field='costInCredits' label='Cost'/>
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
}

export default PlanetDetails;
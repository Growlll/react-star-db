import React from 'react';
import {SwapiServiceConsumer} from '../SwapiServiceContext/SwapiServiceContext';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPerson}
              getImageUrl={getPersonImage}>

              <Record field='gender' label='Gender'/>
              <Record field='eyeColor' label='Eye color'/>
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
}

export default PersonDetails;
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../ItemDetails/ItemDetails';
import styled from 'styled-components';
import {SwapiServiceConsumer} from '../SwapiServiceContext/SwapiServiceContext';

const swapiService = new SwapiService()

const {
  getPerson,
  getStarship,
  getPersonImage,
  getStarshipImage
} = swapiService

const TermStyle = styled.span`
  color: #bbbcbc;
`

const Record = ({item, field, label}) => {
  return (
    <li className='list-group-item'>
      <TermStyle className='term'>{label}: </TermStyle>
      <span>{item[field]}</span></li>
  )
}

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

const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
         return (
           <ItemDetails
             itemId={itemId}
             getData={getStarship}
             getImageUrl={getStarshipImage}>

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

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
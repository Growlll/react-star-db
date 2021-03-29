import SwapiService from '../../services/swapi-service';
import ItemDetails from '../ItemDetails/ItemDetails';
import styled from 'styled-components';

const swapiService = new SwapiService()

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService

const TermStyle = styled.span`
  color: #bbbcbc;
`

const Record = ({ item, field, label }) => {
  return (
    <li className='list-group-item'>
      <TermStyle className='term'>{label}: </TermStyle>
      <span>{ item[field] }</span></li>
  )
}

const PersonDetails = ({itemId}) => {
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
const PlanetDetails = ({itemId}) => {
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
const StarshipDetails = ({itemId}) => {
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

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
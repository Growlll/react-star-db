import { withData } from '../hoc-helpers/withData';
import SwapiService from '../../services/swapi-service';
import ItemList from '../ItemList/ItemList';

const swapiService = new SwapiService()

const {
  getPerson,
  getPlanet,
  getStarship
} = swapiService

const PersonDetails = withData(ItemList, getPerson)
const PlanetDetails = withData(ItemList, getPlanet)
const StarshipDetails = withData(ItemList, getStarship)

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
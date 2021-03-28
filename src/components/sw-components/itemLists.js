import { withData } from '../hoc-helpers/withData';
import SwapiService from '../../services/swapi-service';
import ItemList from '../ItemList/ItemList';

const swapiService = new SwapiService()

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService

const PersonList = withData(ItemList, getAllPeople)
const PlanetList = withData(ItemList, getAllPlanets)
const StarshipList = withData(ItemList, getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}
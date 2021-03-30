import {withData} from '../hoc-helpers/withData';
import SwapiService from '../../services/swapi-service';
import ItemList from '../ItemList/ItemList';
import React from 'react';

const swapiService = new SwapiService()

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService

const withChildFunction = (Wrapper, fn) => {
  return (props) => {
    return (
      <Wrapper {...props} >
        {fn}
      </Wrapper>
    )
  }
}

const withChildren = ({name}) => <span>{name}</span>
const withNameAndModel = ({ name, model}) => <span>{name} ({model})</span>

const PersonList = withData(
                        withChildFunction(ItemList, withChildren),
                        getAllPeople)
const PlanetList = withData(
                        withChildFunction(ItemList, withChildren),
                        getAllPlanets)
const StarshipList = withData(
                        withChildFunction(ItemList, withNameAndModel),
                        getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}

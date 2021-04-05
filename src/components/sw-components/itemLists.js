import {withData} from '../hoc-helpers/WithData';
import ItemList from '../ItemList/ItemList';
import React from 'react';
import WithSwapiService from '../hoc-helpers/WithSwapiService';

const withChildFunction = (fn) => (Wrapper) => {
  return (props) => {
    return (
      <Wrapper {...props} >
        {fn}
      </Wrapper>
    )
  }
}

const withChildren = ({name}) => <span>{name}</span>
const withNameAndModel = ({name, model}) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = WithSwapiService(mapPersonMethodsToProps)(
  withData(
    withChildFunction(withChildren)(
      ItemList)))

const PlanetList = WithSwapiService(mapPlanetMethodsToProps)(
  withData(
    withChildFunction(withChildren)(
      ItemList)))

const StarshipList = WithSwapiService(mapStarshipMethodsToProps)(
  withData(
    withChildFunction(withNameAndModel)(
      ItemList)))


export {
  PersonList,
  PlanetList,
  StarshipList
}

import {withData} from '../hoc-helpers/WithData';
import ItemList from '../ItemList/ItemList';
import React from 'react';
import WithSwapiService from '../hoc-helpers/WithSwapiService';

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

const PersonList = WithSwapiService(
  withData(withChildFunction(ItemList, withChildren)),
  mapPersonMethodsToProps)

const PlanetList = WithSwapiService(
  withData(withChildFunction(ItemList, withChildren)),
  mapPlanetMethodsToProps)

const StarshipList = WithSwapiService(
  withData(withChildFunction(ItemList, withNameAndModel)),
  mapStarshipMethodsToProps)

export {
  PersonList,
  PlanetList,
  StarshipList
}

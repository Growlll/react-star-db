import React from 'react';
import styled from 'styled-components';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

const RandomPlanetStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto 20px;
  background: #303030;
  border-radius: 5px;
  padding: 15px;
`
const ImageBlockStyle = styled.img`
  width: 150px;
  border-radius: 5px;
`
const TitleStyle = styled.h4`
  margin-bottom: 1rem;
`
const ListStyle = styled.ul`
  padding-left: 1rem;
  margin-bottom: 0;

  & .list-group-item {
    list-style-type: none;
    margin-bottom: 0.5rem;
    border: none;
    border-top: 1px solid grey;
    padding: 0;
  }
`
const CardBodyStyle = styled.div`
  padding-top: 0;
`

class RandomPlanet extends React.Component {
  state = {
    planet: {},
    loading: true,
    error: false
  }
  swapiService = new SwapiService()

  onPlanetLoaded = (planet) => {
    this.setState({
      planet: planet,
      loading: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 21) + 2
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const {planet, loading, error} = this.state
    const hasData = !(loading || error)

    return (
      <RandomPlanetStyle>
        {error && <ErrorIndicator />}
        {loading && <Spinner />}
        {hasData && <PlanetView planet={planet} />}
      </RandomPlanetStyle>
    )
  }
}

const PlanetView = ({planet}) => {
  const {id, diameter, rotationPeriod, population, name} = planet

  return (
    <>
      <ImageBlockStyle src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>

      <CardBodyStyle className='card-body'>
        <TitleStyle>{name}</TitleStyle>
        <ListStyle>
          <li className='list-group-item'>
            <span className='term'>Population </span>
            <span>{population}</span></li>
          <li className='list-group-item'>
            <span className='term'>Rotation </span>
            <span>{rotationPeriod}</span></li>
          <li className='list-group-item'>
            <span className='term'>Diametr </span>
            <span>{diameter}</span></li>
        </ListStyle>
      </CardBodyStyle>
    </>
  )
}

export default RandomPlanet;
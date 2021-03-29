import React from 'react';
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import styled from "styled-components";
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components'


const ContainerStyle = styled.div`
  margin: 0 auto;
`
const ButtonsStyle = styled.div`
  margin-bottom: 20px;

  & > button.btn-change {
    border: transparent;
    background-color: #007053;
    border-radius: 3px;
    padding: 10px 20px;
    font-size: 20px;
    color: #fff;
    transition: all .2s linear;
    margin-right: 15px;
  }

  & button:hover {
    background-color: #00bc8c;
  }
`

class App extends React.Component {

  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  toggleRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => {
      return {showRandomPlanet: !showRandomPlanet}
    })
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <ErrorBoundary>
        <ContainerStyle className='col-12'>
          <div className='col-12'>
            <Header/>
            {this.state.showRandomPlanet && <RandomPlanet/>}

            <ButtonsStyle>
              <button className='btn-change' onClick={this.toggleRandomPlanet}>Change planet</button>
              <ErrorButton/>
            </ButtonsStyle>
          </div>

          <PersonList>
            { ({name}) => <span>{name}</span> }
          </PersonList>

          <PersonDetails itemId={2} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={5} />

          <PlanetList>
            { ({name}) => <span>{name}</span> }
          </PlanetList>

          <StarshipList>
            { ({name}) => <span>{name}</span> }
          </StarshipList>

        </ContainerStyle>
      </ErrorBoundary>
    )
  }
}

export default App;
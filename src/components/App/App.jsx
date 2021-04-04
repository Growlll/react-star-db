import React from 'react';
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import styled from "styled-components";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import {SwapiServiceProvider} from '../SwapiServiceContext/SwapiServiceContext';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';


const ContainerStyle = styled.div`
  margin: 0 auto;
`

class App extends React.Component {

  swapiService = new SwapiService()

  state = {
    hasError: false
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
        <SwapiServiceProvider value={this.swapiService}>
          <ContainerStyle className='col-12'>
            <div className='col-12'>
              <Header/>
              <RandomPlanet />
            </div>

            <PeoplePage />
            <PlanetPage />
            <StarshipPage />

          </ContainerStyle>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}

export default App;
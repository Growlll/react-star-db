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
import Row from '../Row/Row';
import {SwapiServiceProvider} from '../SwapiServiceContext/SwapiServiceContext';


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
        <SwapiServiceProvider value={this.swapiService}>
          <ContainerStyle className='col-12'>
            <div className='col-12'>
              <Header/>
              {this.state.showRandomPlanet && <RandomPlanet/>}

              <ButtonsStyle>
                <button className='btn-change' onClick={this.toggleRandomPlanet}>Change planet</button>
                <ErrorButton/>
              </ButtonsStyle>
            </div>

            <Row left={<PersonList/>} right={<PersonDetails itemId={2}/>}/>
            <Row left={<PlanetList/>} right={<PlanetDetails itemId={5}/>}/>
            <Row left={<StarshipList/>} right={<StarshipDetails itemId={5}/>}/>

          </ContainerStyle>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}

export default App;
import React from 'react';
import Header from "../header/Header";
import RandomPlanet from "../random-planet/RandomPlanet";
import styled from "styled-components";
import PeoplePage from "../people-page/PeoplePage";
import ErrorButton from "../error-button/ErrorButton";
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import SwapiService from '../../services/swapi-service';

const ContainerStyle = styled.div`
  width: 1000px;
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
      <ContainerStyle>
        <Header/>
        {this.state.showRandomPlanet && <RandomPlanet/>}

        <ButtonsStyle>
          <button className='btn-change' onClick={this.toggleRandomPlanet}>Change planet</button>
          <ErrorButton/>
        </ButtonsStyle>

        <PeoplePage getData={this.swapiService.getAllPeople}/>

        <div className='row mb-12'>
          <div className='col-md-6 pl-0'>
            <ItemList getData={this.swapiService.getAllPlanets}
                      renderItem={({ name }) => (
                        <span>{name}<button>!!!</button></span>
                      )}/>
          </div>

          <div className='col-md-6 pr-0'>
            <PersonDetails getAllItem={this.getAllItem} personId={this.state.selectedPerson}/>
          </div>
        </div>

        <div className='row mb-12'>
          <div className='col-md-6 pl-0'>
            <ItemList getData={this.swapiService.getAllStarships}
                      renderItem={({ name }) => (
                        <span>{name}<button>111!</button></span>
                      )}/>
          </div>

          <div className='col-md-6 pr-0'>
            <PersonDetails getAllItem={this.getAllItem}
                           personId={this.state.selectedPerson}/>
          </div>
        </div>

      </ContainerStyle>
    )
  }
}

export default App;
import React from 'react';
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import styled from "styled-components";
import PeoplePage from "../PeoplePage/PeoplePage";
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import SwapiService from '../../services/swapi-service';
import Row from '../Row/Row';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService

    const personDetails = (
      <ItemDetails id={6}
                   getData={getPerson}
                   getImageUrl={getPersonImage}/>
    )
    const starshipDetails = (
      <ItemDetails id={5}
                   getData={getStarship}
                   getImageUrl={getStarshipImage}/>
    )

    return (
      <ContainerStyle className='col-12'>
        <div className='col-12'>
          <Header/>
          {this.state.showRandomPlanet && <RandomPlanet/>}

          <ButtonsStyle>
            <button className='btn-change' onClick={this.toggleRandomPlanet}>Change planet</button>
            <ErrorButton/>
          </ButtonsStyle>
        </div>

        <Row left={personDetails}
             right={starshipDetails}/>

        {/*<PeoplePage getData={this.swapiService.getAllPeople}/>*/}

        {/*<div className='row mb-12'>*/}
        {/*  <div className='col-lg-6'>*/}
        {/*    <ItemList getData={this.swapiService.getAllPlanets}*/}
        {/*              renderItem={({ name }) => (*/}
        {/*                <span>{name}<button>!!!</button></span>*/}
        {/*              )}/>*/}
        {/*  </div>*/}

        {/*  <div className='col-lg-6'>*/}
        {/*    <ItemDetails getAllItem={this.getAllItem} personId={this.state.selectedPerson}/>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className='row mb-12'>*/}
        {/*  <div className='col-lg-6'>*/}
        {/*    <ItemList getData={this.swapiService.getAllStarships}*/}
        {/*              renderItem={({ name }) => (*/}
        {/*                <span>{name}<button>111!</button></span>*/}
        {/*              )}/>*/}
        {/*  </div>*/}

        {/*  <div className='col-lg-6'>*/}
        {/*    <ItemDetails getAllItem={this.getAllItem}*/}
        {/*                 personId={this.state.selectedPerson}/>*/}
        {/*  </div>*/}
        {/*</div>*/}

      </ContainerStyle>
    )
  }
}

export default App;
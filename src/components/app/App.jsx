import React, { useState } from 'react';
import Header from "../header/Header";
import RandomPlanet from "../random-planet/RandomPlanet";
import ItemList from "../item-list/ItemList";
import PersonDetails from "../person-details/PersonDetails";
import styled from "styled-components";

const InfoStyle = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > .col-md-12 {
    padding: 0;
  }
`

class App extends React.Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null
  }

  toggleRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => {
      return {showRandomPlanet: !showRandomPlanet}
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {

    return (
      <div>
        <Header/>
        {this.state && <RandomPlanet/>}

        <button onClick={this.toggleRandomPlanet}>Change planet</button>

        <InfoStyle className='row mb-2'>
          <div className='col-md-12'>
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>

          <div className='col-md-12'>
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </InfoStyle>
      </div>
    )
  }
}

export default App;
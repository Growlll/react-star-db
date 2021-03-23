import React, {useState} from 'react';
import Header from "../header/Header";
import RandomPlanet from "../random-planet/RandomPlanet";
import ItemList from "../item-list/ItemList";
import PersonDetails from "../person-details/PersonDetails";
import styled from "styled-components";

const ContainerStyle = styled.div`
  width: 1000px;
  margin: 0 auto;
`
const InfoStyle = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;

  & > .col-md-12 {
    padding: 0;
  }
`
const ButtonsStyle = styled.div`
  margin-bottom: 20px;

  & > button {
    border: transparent;
    background-color: #007053;
    border-radius: 3px;
    padding: 5px 20px;
    font-size: 20px;
    color: #fff;
    transition: all .2s linear;
  }
  
  & button:hover {
    background-color: #00bc8c;
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
      <ContainerStyle>
        <Header/>
        {this.state && <RandomPlanet/>}

        <ButtonsStyle>
          <button onClick={this.toggleRandomPlanet}>Change planet</button>
        </ButtonsStyle>

        <InfoStyle className='row mb-12'>
          <div className='col-md-6 pl-0'>
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>

          <div className='col-md-6 pr-0'>
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </InfoStyle>
      </ContainerStyle>
    )
  }
}

export default App;
import React from 'react';
import Header from "../header/Header";
import RandomPlanet from "../random-planet/RandomPlanet";
import styled from "styled-components";
import PeoplePage from "../people-page/PeoplePage";

const ContainerStyle = styled.div`
  width: 1000px;
  margin: 0 auto;
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
    showRandomPlanet: true
  }

  toggleRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => {
      return {showRandomPlanet: !showRandomPlanet}
    })
  }

  render() {

    return (
      <ContainerStyle>
        <Header/>
        {this.state.showRandomPlanet && <RandomPlanet />}

        <ButtonsStyle>
          <button onClick={this.toggleRandomPlanet}>Change planet</button>
        </ButtonsStyle>

        <PeoplePage />
        <PeoplePage />
        <PeoplePage />

      </ContainerStyle>
    )
  }
}

export default App;
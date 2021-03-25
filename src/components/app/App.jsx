import React from 'react';
import Header from "../header/Header";
import RandomPlanet from "../random-planet/RandomPlanet";
import styled from "styled-components";
import PeoplePage from "../people-page/PeoplePage";
import ErrorButton from "../error-button/ErrorButton";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

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
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ContainerStyle>
        <Header/>
        {this.state.showRandomPlanet && <RandomPlanet />}

        <ButtonsStyle>
          <button className='btn-change' onClick={this.toggleRandomPlanet}>Change planet</button>
          <ErrorButton />
        </ButtonsStyle>

        <PeoplePage />
        <PeoplePage />
        <PeoplePage />

      </ContainerStyle>
    )
  }
}

export default App;
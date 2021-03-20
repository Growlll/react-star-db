import React from 'react';
import Header from "../header/Header";
import RandomPlanet from "../random-planet/RandomPlanet";
import ItemList from "../item-list/ItemList";
import PersonDetails from "../person-details/PersonDetails";
import styled from "styled-components";

const InfoStyle = styled.div`
  width: 500px;
  margin: 0 auto;
  
  & > .col-md-6 {
    padding: 0;
  }
`

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <InfoStyle className='row mb-2'>
        <div className='col-md-6'>
          <ItemList />
        </div>

        <div className='col-md-6'>
          <PersonDetails />
        </div>
      </InfoStyle>
    </div>
  )
}

export default App;
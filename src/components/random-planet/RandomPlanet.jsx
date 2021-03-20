import React from 'react';
import styled from 'styled-components';

const RandomPlanetStyle = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto 20px;
  background: #303030;
  border-radius: 5px;
  padding: 15px;
`

const ImageBlockStyle = styled.div`
  width: 150px;
  height: 150px;
  
  & > img {
    width: 100%;
    border-radius: 5px;
  }
`

const TitleStyle = styled.h4`
  margin-bottom: 1rem;
`

const ListStyle = styled.ul`
  padding-left: 1rem;
  margin-bottom: 0;
  
  & li {
    list-style-type: none;
    margin-bottom: 0.5rem;
    border-top: 1px solid grey;
  }
`
const CardBodyStyle = styled.div`
  padding-top: 0;
`

const RandomPlanet = () => {
  return (
    <RandomPlanetStyle>
      <ImageBlockStyle>
        <img src="https://starwars-visualguide.com/assets/img/planets/10.jpg" alt=""/>
      </ImageBlockStyle>

      <CardBodyStyle className='card-body'>
        <TitleStyle>Planet Name</TitleStyle>
        <ListStyle>
          <li>Population 123123</li>
          <li>Rotation Period 43</li>
          <li>Diametr 100</li>
        </ListStyle>
      </CardBodyStyle>
    </RandomPlanetStyle>
  )
}

export default RandomPlanet;
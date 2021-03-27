import React from 'react';
import styled from 'styled-components';
import icon from './death-star.png';

const ErrorIndicatorStyle = styled.div`
  text-align: center;
`
const TitleStyle = styled.h3`
  font-size: 2rem;
  color: red;
`
const TextStyle = styled.p`
  color: green;
  margin: 0;
`
const IconStyle = styled.img`
  width: 100px;
`

const ErrorIndicator = () => {
  return (
    <ErrorIndicatorStyle>
      <IconStyle src={icon} alt="error icon"/>
      <TitleStyle>Oops!!!</TitleStyle>
      <TextStyle>Something has gone terribly wrong</TextStyle>
      <TextStyle>We are already fixing this</TextStyle>
    </ErrorIndicatorStyle>
  )
}

export default ErrorIndicator;
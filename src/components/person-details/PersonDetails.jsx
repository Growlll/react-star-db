import React from 'react';
import styled from "styled-components";

const PersonDetailsStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto 20px;
  background: #303030;
  border-radius: 5px;
  padding: 15px;
`
const ImageBlockStyle = styled.div`
  width: 150px;
  margin-right: 1.5rem;
  
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
  
  & > .list-group-item {
    border: none;
    border-top: 1px solid grey;
    padding: 0;
    list-style-type: none;
    margin-bottom: 0.5rem;
  }
`
const CardBodyStyle = styled.div`
  padding-top: 0;
`

class PersonDetails extends React.Component {
  render() {
    return (
      <PersonDetailsStyle className='person-details card'>
        <ImageBlockStyle>
          <img className='person-image'
               src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
               alt=""/>
        </ImageBlockStyle>

        <CardBodyStyle className='card-body'>
          <TitleStyle>H2-D2</TitleStyle>
          <ListStyle>
            <li className='list-group-item'>
              <span className='term'>Gender</span>
              <span>male</span></li>
            <li className='list-group-item'>
              <span className='term'>Birth Year</span>
              <span>43</span></li>
            <li className='list-group-item'>
              <span className='term'>Eye color</span>
              <span>blue</span></li>
          </ListStyle>
        </CardBodyStyle>
      </PersonDetailsStyle>
    )
  }
}

export default PersonDetails;
import React from 'react';
import styled from "styled-components";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

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
const TermStyle = styled.span`
  color: #bbbcbc;
`

class PersonDetails extends React.Component {
  swapi = new SwapiService()

  state = {
    person: null,
    loading: true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson()
      this.setState({ loading: true })
    }
  }

  componentDidMount() {
    this.updatePerson()
    this.setState({ loading: false })
  }

  updatePerson = () => {
    const { personId } = this.props
    if(!personId) {
      return
    }

    this.swapi
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          loading: false
        })
      })
  }

  render() {
    if(!this.state.person) {
      return <>Select a person from list</>
    }

    if(this.state.loading) {
      return <Spinner />
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person

    return (
      <PersonDetailsStyle className='person-details card'>
        <ImageBlockStyle>
          <img className='person-image'
               src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
               alt=""/>
        </ImageBlockStyle>

        <CardBodyStyle className='card-body'>
          <TitleStyle>{ name }</TitleStyle>
          <ListStyle>
            <li className='list-group-item'>
              <TermStyle className='term'>Gender: </TermStyle>
              <span>{ gender }</span></li>
            <li className='list-group-item'>
              <TermStyle className='term'>Birth Year: </TermStyle>
              <span>{ birthYear }</span></li>
            <li className='list-group-item'>
              <TermStyle className='term'>Eye color: </TermStyle>
              <span>{ eyeColor }</span></li>
          </ListStyle>
        </CardBodyStyle>
      </PersonDetailsStyle>
    )
  }
}

export default PersonDetails;
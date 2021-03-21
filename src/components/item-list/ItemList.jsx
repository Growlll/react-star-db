import React from 'react';
import styled from "styled-components";
import SwapiService from '../../services/swapi-service'
import Spinner from "../spinner/spinner";

const ListStyle = styled.ul`
  margin-bottom: 20px;
`

class ItemList extends React.Component {
  swapi = new SwapiService()
  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapi.getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        })
      })
  }

  renderItem = (list) => {
    return list.map(({ id, name }) => {
      return (
        <li className='list-group-item'
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      )
    })
  }

  render() {
    if(!this.state.peopleList) {
      return <Spinner />
    }

    const people = this.renderItem(this.state.peopleList)

    return (
      <ListStyle className='list-group'>
        {people}
      </ListStyle>
    )
  }
}

export default ItemList;
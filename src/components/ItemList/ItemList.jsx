import React from 'react';
import styled from "styled-components";
import Spinner from "../Spinner/spinner";

const ListStyle = styled.ul`
  margin-bottom: 20px;

  & li {
    cursor: pointer;
  }
  
  & li.active {
    background-color: darkgray;
  }

  & li:hover {
    background-color: #919090;
  }
`

class ItemList extends React.Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    const { getData } = this.props

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        })
      })
  }

  renderItem = (list) => {
    return list.map((item) => {
      const { id } = item
      const label = this.props.renderItem(item)

      return (
        <li className={`list-group-item ${this.props.id === id ? 'active' : ''}`}
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      )
    })
  }

  render() {
    if (!this.state.itemList) {
      return <Spinner/>
    }

    const items = this.renderItem(this.state.itemList)

    return (
      <ListStyle className='list-group'>
        {items}
      </ListStyle>
    )
  }
}

export default ItemList;
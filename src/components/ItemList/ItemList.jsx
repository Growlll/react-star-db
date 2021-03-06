import React from 'react';
import styled from 'styled-components';

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

const ItemList = (props) => {
  const { activeId, data, onItemSelected, children: renderLabel } = props

  const items = data.data.map((item) => {
      const { id } = item
      const label = renderLabel(item)

      return (
        <li className={`list-group-item ${activeId === id ? 'active' : ''}`}
            key={id}
            onClick={() => onItemSelected(id)}>
          {label}
        </li>
      )
    })

  return (
    <ListStyle className='list-group'>
      {items}
    </ListStyle>
  )
}

export default ItemList;
import React from 'react';
import styled from "styled-components";

const ListStyle = styled.ul`
  margin-bottom: 20px;
`

const ItemList = () => {
  return (
    <ListStyle className='list-group'>
      <li className='list-group-item'>Luke</li>
      <li className='list-group-item'>Dart</li>
      <li className='list-group-item'>R2-D2</li>
    </ListStyle>
  )
}

export default ItemList;
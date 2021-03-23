import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`
const TitleStyle = styled.h3`
  & a {
    color: #fff;
  }
  & a:hover {
    text-decoration: none;
    color: #00bc8c;
  }
`
const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;
`
const ListStyle = styled.ul`
  align-self: center;
  margin-bottom: 0;
  padding: 0;
`
const ItemStyle = styled.li`
  list-style-type: none;
  margin-right: 1.5rem;
  font-size: 1.2rem;
  
  & a {
    transition: all .2s linear;
  }
  
  & a:hover {
    text-decoration: none;
  }
`

const Header = () => {
  return (
    <HeaderStyle className='header d-flex'>
      <TitleStyle>
        <a href="/">Star DB</a>
      </TitleStyle>

      <NavStyle>
        <ListStyle className='d-flex'>
          <ItemStyle>
            <a href='/'>People</a>
          </ItemStyle>
          <ItemStyle>
            <a href='/'>Planets</a>
          </ItemStyle>
          <ItemStyle>
            <a href='/'>Starships</a>
          </ItemStyle>
        </ListStyle>
      </NavStyle>
    </HeaderStyle>
  )
}

export default Header;
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.bg};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    font-size: 0.875rem;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  .active {
    color: ${props => props.theme.colors.highlight};
  }
`

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to='/' activeClassName='active'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/write/' activeClassName='active'>
              Write
            </Link>
          </li>
          <li>
            <Link to='/about/' activeClassName='active'>
              About
            </Link>
          </li>
          <li>
            <Link to='/safety/' activeClassName='active'>
              Safety
            </Link>
          </li>
          <li>
            <Link to='/contact/' activeClassName='active'>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu

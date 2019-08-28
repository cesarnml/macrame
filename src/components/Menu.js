import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Container from 'components/Container'

const Header = styled.header`
  background: ${props => props.theme.colors.bg};
  width: 100%;
  padding: 1.5em 0;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.0em;

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
     
  }

  li {
    display: inline-block;
    margin-left: .9em;
    &:first-child {
      /* position: relative; */
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
    color: ${props => props.theme.colors.secondary};
  }

  #logo {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.6rem;
    @media (max-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.0rem;
    }
    &:hover {
      color: ${props => props.theme.colors.primary};
    }

    span {
      display: block;
      width: 40px;
    }
  }
`

const MainChoice = styled.div`
  display: flex;
  justify-content: space-around;

  .styled {
    color: black;
    font-weight: 400;
    font-size: 40px;
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 0 auto;
    margin-top: 50px;
    padding: 0 1.5em;
    font-family: 'Libre Baskerville', serif;
    text-decoration: none;
    transition: all 0.2s;
    @media (max-width: ${props => props.theme.responsive.medium}) {
      padding: 0;
      }
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  .active {
    color: ${props => props.theme.colors.secondary};
  }
`

const Menu = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <ul>
            <li>
              <Link to='/' id='logo'>
                MACRAMÉ
                <span> مقرمة</span>
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
        <MainChoice>
          <Link className='styled' to='/write/' activeClassName='active'>
            Write
          </Link>
          <Link className='styled' to='/read/' activeClassName='active'>
            Read
          </Link>
        </MainChoice>
      </Header>
    </Container>
  )
}

export default Menu

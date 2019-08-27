import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const SubMenu = styled.p`

  font-size: 1.0rem;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.fourth};
`;

const CardList = props => {
 
  return (
    <>
  
  <List>{props.children}</List>
  </>
  )
}

export default CardList

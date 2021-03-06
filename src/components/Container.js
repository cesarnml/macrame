import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: .4em 1.5em 1em;
  flex-grow: 1;
  @media (max-width: ${props => props.theme.responsive.medium}) {
    padding: .4em 1.5em 1em;
    }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container

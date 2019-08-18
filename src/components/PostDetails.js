import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
    color: ${props => props.theme.colors.fourth};
  }
`

const Date = styled.p`
  display: inline-block;
  color: ${props => props.theme.colors.fourth};
`

const ReadingTime = styled.p`
  display: inline-block;
  color: ${props => props.theme.colors.fourth};
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>{props.date}</Date>
      <span>•</span>
      <ReadingTime>{`${props.timeToRead} min read `}</ReadingTime>
    </Wrapper>
  )
}

export default PostDetails

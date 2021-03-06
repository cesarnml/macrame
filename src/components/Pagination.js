import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: -2em auto 0;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5em 2em;
  a {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 3;
`

const PageIndicator = styled.span`
  color: gray;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  padding: 1em 1.5em;
  z-index: -1;
  opacity: 0.7;
`

const Pagination = props => {
  const { numReadPages, numIndexPages, currentPage } = props.context
  const numPages = numReadPages || numIndexPages
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const isNotPaginated = isFirst === isLast
  const pathname = props.location.pathname.includes('read') ? '/read' : '/'
  const prevPageNum = currentPage - 1
  const nextPageNum = currentPage + 1

  let prevPageLink = isFirst ? '' : `/${prevPageNum}`
  const nextPageLink = isLast ? '' : `/${nextPageNum}`

  if (prevPageLink === '/1') prevPageLink = ''

  return (
    <Wrapper>
      {!isFirst && (
        <PreviousLink to={`${pathname}${prevPageLink}`}>
          &#8592; Prev Page
        </PreviousLink>
      )}
      {!isNotPaginated && (
        <PageIndicator>
          {currentPage}/{numPages}
        </PageIndicator>
      )}
      {!isLast && (
        <NextLink to={`${pathname}${nextPageLink}`}>Next Page &#8594;</NextLink>
      )}
    </Wrapper>
  )
}

export default Pagination

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
  console.log('PROPS', props)
  const { numReadPages, numIndexPages, currentPage, slug } = props.context
  console.log(props.context)
  const numPages = numReadPages || numIndexPages
  const isFirst = Number(currentPage) === 1
  const isLast = Number(currentPage) === numPages
  console.log(currentPage, numPages, 'here')
  const isNotPaginated = isFirst & isLast
  const pathname = props.location.pathname.includes('read') ? '/read' : ''
  const prevPageNum = Number(currentPage) === 1 ? null : Number(currentPage) - 1
  const nextPageNum = Number(currentPage) + 1

  const pathPrefix = typeof slug === 'string' ? `/tag/${slug}` : ''
  const prevPageLink = isFirst ? null : `${pathPrefix}/${prevPageNum}/`
  const nextPageLink = isLast ? null : `${pathPrefix}/${nextPageNum}/`

  return (
    <Wrapper>
      {!isFirst && (
        <PreviousLink to={`${pathname}/${prevPageLink}`}>
          &#8592; Prev Page
        </PreviousLink>
      )}
      {!isNotPaginated && (
        <PageIndicator>
          {Number(currentPage)}/{numPages}
        </PageIndicator>
      )}
      {!isLast && (
        <NextLink to={`${pathname}/${nextPageLink}`}>
          Next Page &#8594;
        </NextLink>
      )}
    </Wrapper>
  )
}

export default Pagination

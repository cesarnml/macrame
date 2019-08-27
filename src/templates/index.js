import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import CardList from 'components/CardList'
import Card from 'components/Card'
import Helmet from 'react-helmet'
import Container from 'components/Container'
import Pagination from 'components/Pagination'
import SEO from 'components/SEO'
import config from 'utils/siteConfig'

const Index = ({ data, pageContext, location }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  let { currentPage } = pageContext
  currentPage = Number(currentPage)
  const isFirstPage = currentPage === 1
  console.log('INDEX', posts, currentPage, isFirstPage)
  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container>
        <CardList>
          <Card {...featuredPost} featured />
          {posts.slice(1).map(({ node: post }) => (
            <Card key={post.id} {...post} />
          ))}
        </CardList>
      </Container>
      <Pagination context={pageContext} location={location} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
      filter: { isFeatured: { eq: true } }
    ) {
      edges {
        node {
          title
          id
          slug
          author
          country
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Index

import React from 'react'
import Helmet from 'react-helmet'
import config from 'utils/siteConfig'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PropTypes from 'prop-types'

const Safety = props => {
  return (
    <Layout>
      <Helmet>
        <title>{`Safety - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>Safety</Container>
    </Layout>
  )
}

Safety.propTypes = {}

export default Safety

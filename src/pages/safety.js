import React from 'react'
import Helmet from 'react-helmet'
import config from 'utils/siteConfig'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'

import PropTypes from 'prop-types'

const Safety = props => {
  return (
    <Layout>
      <Helmet>
        <title>{`Safety - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <PageTitle>Safety</PageTitle>
      </Container>
    </Layout>
  )
}

Safety.propTypes = {}

export default Safety

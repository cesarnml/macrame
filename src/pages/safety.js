import React from 'react'
import Helmet from 'react-helmet'
import config from 'utils/siteConfig'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import styled from 'styled-components'
import Supporters from '../components/Supporters'


// import PropTypes from 'prop-types'

const Concern = styled.h1`
  font-size: 30px;
`
const StyleOver = styled.div`
  h1 {
    text-align: left;
  }

  p {
    line-height: 1.9rem;
    font-size: 16px;
  }

  a {
    color: ${props => props.theme.colors.primary};
  }
`

const FlexContainer = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.responsive.medium}) {
    flex-direction: column;
    align-items: center;
  }

  .content {
    width: 80%;
    margin-right: 10px;
  }
`

const Safety = props => {
  return (
    <Layout>
      <Helmet>
        <title>{`Safety - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <StyleOver>
          <PageTitle className='title'>Safety</PageTitle>
          <FlexContainer>
            <div className='content'>
              <Concern>Please use anonymous names and places.</Concern>
              <p>
                This is up to the writers discretion. However, if you believe
                that information provided here could get someone else hurt or
                jeopardize their safety please consider either posting it
                anonymously or not posting it at all.  Furthermore, please consider
                your own safety and immigration status when posting stories with your own
                name in the story body. Names shared in the author section will not be shared
                online.
              </p>
              <Concern>
                This is not a resource for reporting crimes or seeking help.
              </Concern>
              <p>
                We do not have the resources or the ability to follow up with
                users and make sure they are safe. If you are experiencing a crisis
                please contact the proper authorities where available.
              </p>
              <br></br>

              <a href='https://help.unhcr.org/#_ga=2.77856916.1629316781.1566928972-2139737474.1566928972' rel="noopener noreferrer" target="_blank" >
                UN Refugee Agency</a>


              <a href="https://www.icrc.org/en"><p>International Committee of the Red Cross</p></a>

              <Concern>
                Stories have the right to be rejected by the editors on any
                grounds.
              </Concern>
              <p>
                While we endeavour to share as many stories as possible we cannot
                publish all stories. Stories that contain strong language or
                hate speech will not be published.
              </p>
            </div>
            <Supporters></Supporters>
          </FlexContainer>
        </StyleOver>
      </Container>
    </Layout>
  )
}

Safety.propTypes = {}

export default Safety

import React from 'react'
import Helmet from 'react-helmet'
import config from 'utils/siteConfig'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import styled from "styled-components";
import Supporters from "../components/Supporters"

// import PropTypes from 'prop-types'

const Concern = styled.h1`
  font-size: 30px;
`;
const StyleOver = styled.div`

  h1 {
    text-align:left;
  }
  
`;

const FlexContainer = styled.div`
display:flex;

@media (max-width: ${props => props.theme.responsive.medium}) {
    flex-direction: column;
    align-items:center;
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
        <PageTitle className="title">Safety</PageTitle>
        <FlexContainer>
          <div className = "content">
         <Concern>Please use anonymous names and places.</Concern>
            <p>
              This is up to the writers discression. However, if you believe that information provided here could get someone else hurt or jeopardize their safety please consider either posting it anonymously or not posting it at all.
            </p>
            <Concern>This is not a resource for reporting crimes or seeking help.</Concern>
            <p>
              We do not have the resources or the ability to follow up with users and make sure they are safe. If your experiencing a crisis please contact the proper authorities where available.
            </p>
         
              <li><a href="https://help.unhcr.org/" alt="link to UNHCR"></a>The UN Refugee Agency</li>
              <li>International Committee of the Red Cross</li>
            
            <Concern>Stories have the right to be rejected by the editors on any grounds.</Concern>
            <p>
              While we endevour to share as many stories as possible we cannot publish all stories. Stories that contain strong language or hate speech will not be published.
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

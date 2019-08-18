import React from 'react'
import Helmet from 'react-helmet'
import config from 'utils/siteConfig'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PageTitle from 'components/PageTitle'
import styled from "styled-components";
import Supporters from '../components/Supporters';

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

@media (max-width: 768px) {
    flex-direction: column;
    }

  .content {
    width: 80%;
    margin-right: 10px;
  }
`

const About = props => {
  return (
    <Layout>
      <Helmet>
        <title>{`About - ${config.siteTitle}`}</title>
      </Helmet>
      
      <Container>
        <StyleOver>
      <PageTitle className="title">About</PageTitle>
      <FlexContainer>
      <div className = "content">
            <Concern>What is MACRAMÉ ? </Concern>
            <p>
              A space for displaced peoples to come together and share their
              stories of tradgedy and triumph. Amongst eachother and for
              eachother.
            </p>
            <Concern>Who are we ? </Concern>
            <p>
              We hope very soon that MACRAMÉ will be completely run for and by
              displaced people's. However, for the time being it is being
              operated by the following.
            </p>
          
              <li>Brandon Pampuch - Front End Dev</li>
              <li>César Napoleon Mejia Leiva - Full Stack Dev</li>
          
            <Concern>How did MACRAMÉ begin ? </Concern>
            <p>
              As a student project at Lambda School. Students found a common
              passion for creating this space and have continued to spend their
              time crafting it outside of class.
            </p>
            <Concern>How Can you support us ? </Concern>
            <p>
              The link below will provide you with the opportunity to provide
              coding skills and computer resources to displaced people so that
              they can take over the operation of this project as well as begin
              their own.
            </p>
            </div>
            <Supporters/>
            </FlexContainer>
            </StyleOver>
      </Container>
      
    </Layout>
  )
}

About.propTypes = {}

export default About

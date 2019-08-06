import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from 'utils/siteConfig'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PropTypes from 'prop-types'
import { makeId } from 'utils/index.js'

const Write = props => {
  const [story, setStory] = useState({
    title: '',
    author: '',
    country: '',
    body: '',
  })

  const handleFormSubmit = e => {
    e.preventDefault()
    // const client = contentful.createClient({
    //   accessToken: 'CFPAT-fr8v3vLxHcp9QlxNmT1PAQlDHl8IYYqggPAMXJdC3cI',
    // })

    // client
    //   .getSpace('7mqmdpaeqe84')
    //   .then(space =>
    //     space.createEntryWithId('post', 'a0199979898798', {
    //       fields: {
    //         title: {
    //           'en-US': story.title,
    //         },
    //         body: {
    //           'en-US': story.body,
    //         },
    //       },
    //     })
    //   )
    //   .then(entry => console.log('entry', entry))
    //   .catch(console.error)
  }
  const handleInputChange = e => {
    const { name, value } = e.target
    setStory(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Write - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <Form onSubmit={handleFormSubmit}>
          <input
            name='title'
            value={story.title}
            onChange={handleInputChange}
            placeholder='Title'
          />
          <input
            name='author'
            value={story.author}
            onChange={handleInputChange}
            placeholder='Author (optional)'
          />
          <input
            name='country'
            value={story.country}
            onChange={handleInputChange}
            placeholder='Country'
          />
          <input
            name='body'
            value={story.body}
            onChange={handleInputChange}
            placeholder='Story'
          />
          <button type='submit'>Share</button>
        </Form>
      </Container>
    </Layout>
  )
}

Write.propTypes = {}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    height: 2rem;
    margin: 0 0 2rem;
    padding: 0 1.5rem;
  }
`
export default Write

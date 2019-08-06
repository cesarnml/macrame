import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from 'utils/siteConfig'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PropTypes from 'prop-types'
import { makeId } from 'utils/index.js'
import slugify from 'slugify'
const contentful = require('contentful-management')

const Write = props => {
  const [story, setStory] = useState({
    title: '',
    author: '',
    country: '',
    body: '',
    coverImage: '',
    file: '',
    fileSrc: '',
  })

  const handleFormSubmit = async e => {
    e.preventDefault()
    console.log(
      'ENV',
      process.env.GATSBY_CONTENTFUL_MANAGEMENT_API_KEY,
      process.env.GATSBY_CONTENTFUL_SPACE_ID
    )
    const entryId = makeId(64)
    const authorId = makeId(64)
    const client = contentful.createClient({
      accessToken: process.env.GATSBY_CONTENTFUL_MANAGEMENT_API_KEY,
    })

    const space = await client.getSpace(process.env.GATSBY_CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment('master')
    const asset = await environment.createAssetFromFiles({
      fields: {
        title: {
          'en-US': story.file.name,
        },
        description: {
          'en-US': 'Asset',
        },
        file: {
          'en-US': {
            contentType: story.file.type,
            fileName: story.file.name,
            file: story.file,
          },
        },
      },
    })
    const assetProcessed = await asset.processForAllLocales()
    const assetPublished = await assetProcessed.publish()

    const entry = await environment.createEntryWithId('post', entryId, {
      fields: {
        title: {
          'en-US': story.title,
        },
        slug: {
          'en-US': slugify(`${story.title} ${makeId(8)}`),
        },
        body: {
          'en-US': story.body,
        },
        author: {
          'en-US': story.author || 'Anonymous',
        },
        publishDate: {
          'en-US': new Date(),
        },
        country: {
          'en-US': story.country,
        },
        heroImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: asset.sys.id,
            },
          },
        },
      },
    })
    const entryPublished = await entry.publish()
    console.log(entry, asset)
  }
  const handleInputChange = e => {
    const { name, value } = e.target
    setStory(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    setStory(prev => ({ ...prev, file }))
    const reader = new FileReader()
    reader.addEventListener(
      'load',
      () => {
        // Setting up base64 URL on image
        setStory(prev => ({ ...prev, fileSrc: reader.result }))
      },
      false
    )
    reader.readAsDataURL(file)
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Write - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <Form onSubmit={handleFormSubmit}>
          <input
            required
            type='text'
            name='title'
            value={story.title}
            onChange={handleInputChange}
            placeholder='Title'
          />
          <input
            type='file'
            name='coverImage'
            value={story.coverImage}
            onChange={handleFileChange}
            placeholder='Cover Image'
          />
          <div style={{ height: 100, width: 100 }}>
            <img src={story.fileSrc} alt='' />
          </div>
          <input
            type='text'
            name='author'
            value={story.author}
            onChange={handleInputChange}
            placeholder='Author (optional)'
          />
          <input
            type='text'
            name='country'
            value={story.country}
            onChange={handleInputChange}
            placeholder='Country (optional)'
          />
          <input
            required
            type='text'
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
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s ease;
    &:focus {
      border-bottom: 1px solid ${props => props.theme.colors.secondary};
    }
  }
  img {
    object-fit: cover;
    object-position: center;
  }
  button {
    font-weight: bold;
    border: 1px solid ${props => props.theme.colors.secondary};
    cursor: pointer;
    width: 100px;
    height: 50px;
  }
`
export default Write

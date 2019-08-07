import React, { useState, useEffect, useRef } from 'react'
import * as contentful from 'contentful-management'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from 'utils/siteConfig'
import Layout from 'components/Layout'
import Container from 'components/Container'
import PropTypes from 'prop-types'
import { makeId } from 'utils/index.js'
import slugify from 'slugify'

const Write = props => {
  const fileInputRef = useRef()
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
    const entryId = makeId(64)
    const client = contentful.createClient({
      accessToken: process.env.GATSBY_CONTENTFUL_MANAGEMENT_API_KEY,
    })
    const space = await client.getSpace(process.env.GATSBY_CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment(
      process.env.GATSBY_CONTENTFUL_ENVIRONMENT
    )
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
          <div className='wrapper-file-input'>
            {!story.fileSrc ? (
              <label for='file-input' class='file-label'>
                Select a Cover Image
              </label>
            ) : (
              <div
                className='wrapper-image'
                onClick={() => fileInputRef.current.click()}
              >
                <img src={story.fileSrc} alt='' />
              </div>
            )}
          </div>
          <input
            id='file-input'
            class='file-input'
            type='file'
            name='coverImage'
            value={story.coverImage}
            onChange={handleFileChange}
            placeholder='Cover Image'
            ref={fileInputRef}
          />
          <input
            required
            type='text'
            name='title'
            value={story.title}
            onChange={handleInputChange}
            placeholder='Title'
          />

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
    margin-left: 1.5rem;
  }
  .wrapper-file-input {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
  .wrapper-image {
    cursor: pointer;
    height: 200px;
    width: 300px;
    overflow: hidden;
    margin-left: 5rem;
  }
  .file-label {
    cursor: pointer;
    border: 1px dotted darkgray;
    color: darkgray;
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    &:hover {
      border: 1px solid ${props => props.theme.colors.highlight};
      color: ${props => props.theme.colors.highlight};
    }
  }
  .file-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`
export default Write

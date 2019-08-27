const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadIndexPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
          filter: { isFeatured: { eq: true } }
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges
      const postsPerIndex = config.postsPerIndex
      const numIndexPages = Math.ceil(posts.length / postsPerIndex)

      // Create main home page
      Array.from({ length: numIndexPages }).forEach((_, i) => {
        createPage({
          path: `/${i === 0 ? '' : i + 1}`,
          component: path.resolve(`./src/templates/index.js`),
          context: {
            limit: postsPerIndex,
            skip: i * postsPerIndex,
            numIndexPages: numIndexPages,
            currentPage: i + 1,
          },
        })
      })

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  const loadReadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
          filter: { isFeatured: { eq: false } }
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges
      const postsPerRead = config.postsPerRead
      const numReadPages = Math.ceil(posts.length / postsPerRead)

      // Create main home page
      Array.from({ length: numReadPages }).forEach((_, i) => {
        createPage({
          path: `/read/${i === 0 ? '' : i + 1}`,
          component: path.resolve(`./src/templates/read.js`),
          context: {
            limit: postsPerRead,
            skip: i * postsPerRead,
            numReadPages: numReadPages,
            currentPage: i + 1,
          },
        })
      })

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadIndexPosts, loadReadPosts])
}

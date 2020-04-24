const postsQuery = `{
    posts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            objectID: id
            fields {
              slug
            }
            frontmatter {
              title
              date_timestamp: date
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              
            }
            timeToRead
            excerpt(pruneLength: 5000)
          }
        }
      }
    }
`
const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt((new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)), //eslint-disable-line
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `posts`,
    settings,
  },
]

module.exports = queries

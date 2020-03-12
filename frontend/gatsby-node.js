const path = require(`path`)

const templates = {
  policyTemplate : path.resolve(`src/templates/policyTemplate.js`)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: templates[node.frontmatter.template],
      context: { }, // additional data can be passed via context
    })
  })
}
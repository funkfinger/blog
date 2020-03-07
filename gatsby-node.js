const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const MdxPostTemplate = path.resolve(
    'src/components/MdxPostTemplate/MdxPostTemplate.jsx'
  );

  const result = await graphql(`
    query MdxPageBuilderQuery {
      mdxPageBuilderQuery: allMdx(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.mdxPageBuilderQuery.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields ? node.fields.slug : null,
      component: MdxPostTemplate,
      context: {
        slug: node.fields.slug,
        next,
        previous,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

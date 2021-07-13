import { useStaticQuery, graphql } from 'gatsby';

const useAllPosts = () =>
  useStaticQuery(graphql`
    query AllPostsQuery {
      allPostsQuery: allMdx(
        filter: { fields: { slug: { regex: "/^/[0-9]/" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              obsolete
              date(formatString: "MMMM DD, YYYY")
              title
              heroImage {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

export default useAllPosts;

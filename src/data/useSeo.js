import { useStaticQuery, graphql } from 'gatsby';

const useSeo = () =>
  useStaticQuery(graphql`
    query {
      seoQuery: site {
        siteMetadata {
          title
          description
          author
          keywords
        }
      }
    }
  `);

export default useSeo;

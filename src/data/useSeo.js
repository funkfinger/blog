import { useStaticQuery, graphql } from 'gatsby';

const useSeo = () => {
  return useStaticQuery(graphql`
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
};

export default useSeo;

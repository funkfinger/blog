import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PageTemplatePure from './PageTemplatePure';

const PageTemplate = ({
  data: {
    mdxPostBySlugQuery: {
      frontmatter: { heroImage, title, date, obsolete },
      body,
    },
  },
}) => (
  <PageTemplatePure
    body={body}
    heroImage={heroImage}
    title={title}
    date={date}
    obsolete={obsolete}
  />
);

PageTemplate.propTypes = {
  data: PropTypes.shape({
    mdxPostBySlugQuery: PropTypes.shape({
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        obsolete: PropTypes.bool,
        heroImage: PropTypes.object, // eslint-disable-line
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query MdxPostSlugQuery($slug: String!) {
    mdxPostBySlugQuery: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        obsolete
        date(formatString: "MMMM DD, YYYY")
        title
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;

export default PageTemplate;

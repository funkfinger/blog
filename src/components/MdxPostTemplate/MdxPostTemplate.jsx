import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import HeroImage from '../HeroImage/HeroImage';

export const PageTemplatePure = ({ heroImage, title, date, body }) => {
  const img = heroImage ? (
    <HeroImage img={heroImage.childImageSharp.fluid} />
  ) : null;
  return (
    <div>
      {img}
      <h3>{title}</h3>
      <div className="post-date">{date}</div>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

PageTemplatePure.propTypes = {
  heroImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({ fluid: PropTypes.shape({}) }),
  }),
  title: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string,
};

PageTemplatePure.defaultProps = {
  heroImage: null,
  title: '',
  date: '',
  body: '',
};

const PageTemplate = ({
  data: {
    mdxPostBySlugQuery: {
      frontmatter: { heroImage, title, date },
      body,
    },
  },
}) => (
  <PageTemplatePure
    body={body}
    heroImage={heroImage}
    title={title}
    date={date}
  />
);

PageTemplate.propTypes = {
  data: PropTypes.shape({
    mdxPostBySlugQuery: PropTypes.shape({
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        heroImage: PropTypes.object,
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
        date(formatString: "MMMM DD, YYYY")
        title
        heroImage {
          childImageSharp {
            fluid(maxWidth: 840) {
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

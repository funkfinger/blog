import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import HeroImage from '../HeroImage/HeroImage';

export const PageTemplatePure = ({
  heroImage,
  title,
  date,
  body,
  obsolete,
}) => {
  const img = heroImage ? (
    <HeroImage img={heroImage.childImageSharp.fluid} />
  ) : null;
  return (
    <div className={`single-post${obsolete ? ' obsolete' : ''}`}>
      {img}
      <div className="single-post-body">
        <h1>{title}</h1>
        <div className="post-date">{date}</div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
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
  obsolete: PropTypes.bool,
};

PageTemplatePure.defaultProps = {
  heroImage: null,
  title: '',
  date: '',
  body: '',
  obsolete: false,
};

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

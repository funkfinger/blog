import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import HeroImage from '../HeroImage/HeroImage';

const PageTemplatePure = ({ heroImage, title, date, body, obsolete }) => {
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

export default PageTemplatePure;

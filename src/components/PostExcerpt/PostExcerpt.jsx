import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import HeroImage from '../HeroImage/HeroImage';

const PostExcerpt = ({ title, children, img, slug }) => {
  const i = img ? <HeroImage img={img.childImageSharp.fluid} /> : null;
  return (
    <div className="post-excerpt">
      <Link to={slug}>
        {i}
        <h3>{title}</h3>
        <div>{children}</div>
        <div className="more-link">more...</div>
      </Link>
    </div>
  );
};

PostExcerpt.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  img: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({
        aspectRatio: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        sizes: PropTypes.string.isRequired,
        base64: PropTypes.string,
        tracedSVG: PropTypes.string,
        srcWebp: PropTypes.string,
        srcSetWebp: PropTypes.string,
        media: PropTypes.string,
      }),
    }),
  }),
};

PostExcerpt.defaultProps = {
  img: null,
};

export default PostExcerpt;

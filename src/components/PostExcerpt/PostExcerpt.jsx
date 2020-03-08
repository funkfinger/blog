import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import HeroImage from '../HeroImage/HeroImage';

const PostExcerpt = ({ title, children, img, slug, first, obsolete }) => {
  const i = img ? <HeroImage img={img.childImageSharp.fluid} /> : null;
  const c = `post-excerpt${first ? ' first-post-in-list' : ''}${
    obsolete ? ' obsolete' : ''
  }`;
  return (
    <article className={c}>
      <Link to={slug}>{i}</Link>
      <div className="post-excerpt-text">
        <Link to={slug}>
          <h3>{title}</h3>
        </Link>
        <p>{children}</p>
        <Link to={slug}>
          <div className="more-link">more...</div>
        </Link>
      </div>
    </article>
  );
};

PostExcerpt.propTypes = {
  first: PropTypes.bool,
  obsolete: PropTypes.bool,
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
  first: false,
  obsolete: false,
  img: null,
};

export default PostExcerpt;

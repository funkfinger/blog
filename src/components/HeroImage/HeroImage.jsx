import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const HeroImage = ({ img }) =>
  img ? <Img fluid={img} /> : <div className="hero-image-holder" />;

HeroImage.propTypes = { img: PropTypes.shape({}) };

HeroImage.defaultProps = { img: null };

export default HeroImage;

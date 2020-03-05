import React from 'react';
import PropTypes from 'prop-types';

const PostExcerpt = ({ title, children }) => (
  <div className="post-excerpt">
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

PostExcerpt.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PostExcerpt;

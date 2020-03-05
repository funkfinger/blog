import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

const YouTubeVideo = ({ id }) => (
  <div className="youtube">
    <YouTube id={id} videoId={id} width="100%" />
  </div>
);

YouTubeVideo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default YouTubeVideo;

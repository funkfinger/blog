import React from 'react';
import { Helmet } from 'react-helmet-async';

import PropTypes from 'prop-types';
import useSeo from '../../data/useSeo';

// look to enhance this here:
// eslint-disable-next-line max-len
// https://github.com/PaulieScanlon/gatsby-theme-terminal/blob/master/%40pauliescanlon/gatsby-theme-terminal/src/components/Seo/Seo.js

const Seo = ({ pageTitle = null }) => {
  const lang = 'en';
  const {
    seoQuery: {
      siteMetadata: { title, description, keywords },
    },
  } = useSeo();

  const titleFormatted = pageTitle ? `${pageTitle} | ${title}` : title;
  return (
    <Helmet
      title={title}
      titleTemplate={titleFormatted}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/images/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/images/favicon-32x32.png',
        },
      ]}
    >
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Facebook */}
      <meta property="og:title" content={titleFormatted} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleFormatted} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

Seo.propTypes = {
  pageTitle: PropTypes.string,
};

Seo.defaultProps = {
  pageTitle: null,
};

export default Seo;

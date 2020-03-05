import React from 'react';
import PropTypes from 'prop-types';

import Seo from '../Seo/Seo';
import Header from '../Header/Header';

import useSeo from '../../data/useSeo';

const Layout = ({ children, title }) => {
  const data = useSeo();
  const t = data.seoQuery.siteMetadata.title || title;
  return (
    <div className="layout">
      <Seo title={t} />
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: 'Jay, Trying To Remember...',
};

export default Layout;

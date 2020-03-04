/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './src/components/Layout/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <HelmetProvider>
    <div className="blah">{element}</div>
  </HelmetProvider>
);

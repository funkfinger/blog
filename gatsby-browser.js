/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { MDXProvider } from '@mdx-js/react';
import Gist from 'react-gist';

import Layout from './src/components/Layout/Layout';
import CodeHighlighter from './src/components/CodeHighlighter/CodeHighlighter';

const components = {
  code: CodeHighlighter,
  Gist,
};

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <HelmetProvider>{element}</HelmetProvider>
  </MDXProvider>
);

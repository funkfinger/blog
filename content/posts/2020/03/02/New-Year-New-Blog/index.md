---
date: 2020-03-02 23:07:23
title: New Year, New Blog
heroImage: '../../../../../images/2020.png'
---

happy new year

![sparkler emitting sparks](./sparkler.jpg)

<Gist id="351738" data-testid="find-me" />

```jsx
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { MDXProvider } from '@mdx-js/react';

import Layout from './src/components/Layout/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <HelmetProvider>{element}</HelmetProvider>
  </MDXProvider>
);
```

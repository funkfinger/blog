/* eslint-disable no-undef */
import React from 'react';

import fixtures from '../___test___/fixtures';

const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  // useStaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockImplementation(() => ({ ...fixtures })),
};

/* eslint-disable max-len */

const heroImageFluid = {
  aspectRatio: 3.3333333333333335,
  base64: 'data:image/png;base64,',
  sizes: '(max-width: 840px) 100vw, 840px',
  src: '/static/c3623847725bbc7515afe672235ec90b/34ae2/2020.png',
  srcSet:
    '/static/c3623847725bbc7515afe672235ec90b/f24bc/2020.png 210w,↵/static/c3623847725bbc7515afe672235ec90b/f731e/2020.png 420w…',
};

export default {
  seoQuery: {
    siteMetadata: {
      title: 'site title...',
      description: 'site description....',
      author: '@author',
      keywords: ['code', 'electronics', 'tinker'],
    },
  },
};

export const mdxPostBySlugQuery = {
  mdxPostBySlugQuery: {
    body:
      'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "date": "2020-03-02T23:07:23.000Z",\n  "title": "New Year, New Blog",\n  "heroImage": "../../../../../images/2020.png"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "happy ny"));\n}\n;\nMDXContent.isMDXComponent = true;',
    frontmatter: {
      date: 'January 01, 2020',
      title: 'Post Title',
      heroImage: {
        childImageSharp: {
          fluid: heroImageFluid,
        },
      },
    },
    fields: {
      slug: '/2020/03/02/New-Year-New-Blog/',
    },
  },
};

export const postTestBody = {
  body:
    'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "date": "2020-03-02T23:07:23.000Z",\n  "title": "New Year, New Blog",\n  "heroImage": "../../../../../images/2020.png"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar Gist = makeShortcode("Gist");\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "happy new year"), mdx("p", null, mdx("span", _extends({\n    parentName: "p"\n  }, {\n    "className": "gatsby-resp-image-wrapper",\n    "style": {\n      "position": "relative",\n      "display": "block",\n      "marginLeft": "auto",\n      "marginRight": "auto",\n      "maxWidth": "1000px"\n    }\n  }), "\\n      ", mdx("a", _extends({\n    parentName: "span"\n  }, {\n    "className": "gatsby-resp-image-link",\n    "href": "/static/1e8a69b05c46231fbd329976557b67d1/a2510/sparkler.jpg",\n    "style": {\n      "display": "block"\n    },\n    "target": "_blank",\n    "rel": ["noopener"]\n  }), "\\n    ", mdx("span", _extends({\n    parentName: "a"\n  }, {\n    "className": "gatsby-resp-image-background-image",\n    "style": {\n      "paddingBottom": "108%",\n      "position": "relative",\n      "bottom": "0",\n      "left": "0",\n      "backgroundImage": "url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQBAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAfDqlpzYxZ3hpoP/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQMSAhH/2gAIAQEAAQUC5WnaDkjl5db9URk8Mn//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAWEQEBAQAAAAAAAAAAAAAAAAAAERD/2gAIAQIBAT8ByI//xAAYEAEAAwEAAAAAAAAAAAAAAAABABARIP/aAAgBAQAGPwLILWkB5//EABoQAAMBAAMAAAAAAAAAAAAAAAABERAhMVH/2gAIAQEAAT8hbAdMDxoDALFjZK05Fen/2gAMAwEAAgADAAAAEAPPPP/EABYRAAMAAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPxAKP//EABcRAQEBAQAAAAAAAAAAAAAAABEAARD/2gAIAQIBAT8Q1eCF/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARECFBUf/aAAgBAQABPxASKr5LaEbNcwdSkj8xQXgkhuDQWeRDif/Z\')",\n      "backgroundSize": "cover",\n      "display": "block"\n    }\n  })), "\\n  ", mdx("img", _extends({\n    parentName: "a"\n  }, {\n    "className": "gatsby-resp-image-image",\n    "alt": "sparkler emitting sparks",\n    "title": "sparkler emitting sparks",\n    "src": "/static/1e8a69b05c46231fbd329976557b67d1/a2510/sparkler.jpg",\n    "srcSet": ["/static/1e8a69b05c46231fbd329976557b67d1/0479a/sparkler.jpg 250w", "/static/1e8a69b05c46231fbd329976557b67d1/41099/sparkler.jpg 500w", "/static/1e8a69b05c46231fbd329976557b67d1/a2510/sparkler.jpg 1000w"],\n    "sizes": "(max-width: 1000px) 100vw, 1000px",\n    "style": {\n      "width": "100%",\n      "height": "100%",\n      "margin": "0",\n      "verticalAlign": "middle",\n      "position": "absolute",\n      "top": "0",\n      "left": "0"\n    },\n    "loading": "lazy"\n  })), "\\n  "), "\\n    ")), mdx(Gist, {\n    id: "351738",\n    "data-testid": "find-me",\n    mdxType: "Gist"\n  }), mdx("pre", null, mdx("code", _extends({\n    parentName: "pre"\n  }, {\n    "className": "language-javascript"\n  }), "/* eslint-disable react/jsx-props-no-spreading */\\n/* eslint-disable react/prop-types */\\n/* eslint-disable import/prefer-default-export */\\n/* eslint-disable react/jsx-filename-extension */\\nimport React from \'react\';\\nimport { HelmetProvider } from \'react-helmet-async\';\\nimport { MDXProvider } from \'@mdx-js/react\';\\n\\nimport Layout from \'./src/components/Layout/Layout\';\\n\\nexport const wrapPageElement = ({ element, props }) => (\\n  <Layout {...props}>{element}</Layout>\\n);\\n\\nexport const wrapRootElement = ({ element }) => (\\n  <MDXProvider components={components}>\\n    <HelmetProvider>{element}</HelmetProvider>\\n  </MDXProvider>\\n);\\n")));\n}\n;\nMDXContent.isMDXComponent = true;',
  frontmatter: {
    date: 'March 02, 2020',
    title: 'New Year, New Blog',
    heroImage: {
      childImageSharp: {
        fluid: {
          src: '/static/c3623847725bbc7515afe672235ec90b/34ae2/2020.png',
        },
      },
    },
  },
  fields: {
    slug: '/2020/03/02/New-Year-New-Blog/',
  },
};

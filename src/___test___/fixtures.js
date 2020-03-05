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
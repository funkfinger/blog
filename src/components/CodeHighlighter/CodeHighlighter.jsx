import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';

import style from '../../vendor/atom-one-dark';

const CodeHighlighter = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language} style={style}>
      {children}
    </SyntaxHighlighter>
  );
};

CodeHighlighter.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

CodeHighlighter.defaultProps = {
  language: 'javascript',
};

export default CodeHighlighter;

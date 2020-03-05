import React from 'react';

import CodeHighlighter from './CodeHighlighter';

const testComponent = <CodeHighlighter language="jsx">test=1;</CodeHighlighter>;

test('it renders', () => {
  const { getByText } = render(testComponent);
  // the '1' will get it's own span...
  expect(getByText('1')).toBeInTheDocument();
});

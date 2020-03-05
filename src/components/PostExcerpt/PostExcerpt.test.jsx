import React from 'react';

import PostExcerpt from './PostExcerpt';

const testComponent = (
  <PostExcerpt title="Post Title">excerpt body</PostExcerpt>
);

test('it renders', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/post title/i)).toBeInTheDocument();
});

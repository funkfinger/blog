import React from 'react';

import PostExcerpt from './PostExcerpt';

const testComponent = (
  <PostExcerpt title="Post Title" slug="/slug">
    excerpt body
  </PostExcerpt>
);

test('it has a link to post', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/more/i)).toBeInTheDocument();
});

test('it renders', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/post title/i)).toBeInTheDocument();
});

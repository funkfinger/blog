import React from 'react';

import PostExcerpt from './PostExcerpt';

const testComponent = (
  <PostExcerpt title="Post Title" slug="/slug">
    excerpt body
  </PostExcerpt>
);

test('it has obsolete classname', () => {
  const { container } = render(
    <PostExcerpt title="t" slug="s" obsolete>
      body
    </PostExcerpt>
  );
  expect(container.querySelector('.obsolete')).toBeInTheDocument();
});

test('it has designatin for first component', () => {
  const { container } = render(
    <PostExcerpt title="t" slug="s" first>
      body
    </PostExcerpt>
  );
  expect(container.querySelector('.first-post-in-list')).toBeInTheDocument();
});

test('it has a link to post', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/more/i)).toBeInTheDocument();
});

test('it renders', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/post title/i)).toBeInTheDocument();
});

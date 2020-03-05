import React from 'react';

import YouTubeVideo from './YouTubeVideo';

const testComponent = <YouTubeVideo id="kjQ7Axuyp_M" />;

test('it renders', () => {
  const { container } = render(testComponent);
  expect(container).toBeDefined();
});

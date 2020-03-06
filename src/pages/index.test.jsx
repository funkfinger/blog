import React from 'react';

import IndexPage from './index';

test('index page lists posts', () => {
  const { getByText } = render(<IndexPage />);
  expect(getByText('Test Post 3')).toBeInTheDocument();
  expect(getByText(/Test post one!/i)).toBeInTheDocument();
});

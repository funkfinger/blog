import React from 'react';

import Header from './Header';

test('it has a title', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Jay, Trying To Remember/i)).toBeInTheDocument();
});

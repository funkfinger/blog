import React from 'react';

import Footer from './Footer';

const testComponent = <Footer />;

test('it renders', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/waived all copyright/i)).toBeInTheDocument();
});

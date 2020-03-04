import React from 'react';

import MdxPostTemplate from './MdxPostTemplate';

const testComponent = <MdxPostTemplate />;

test('it renders', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/waived all copyright/i)).toBeInTheDocument();
});

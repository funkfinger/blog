import React from 'react';

import useSeo from './useSeo';

/*
this tests that the fixture data is set and that
gatsby is getting mocked and returning the fixture data
see the `___test____` and `__mocks__` folders...

`useSeo` needs to be wrapped in a `react` component because
it is a react hook. 
*/
test('fixture data is set', () => {
  const TestComponent = () => {
    const {
      seoQuery: {
        siteMetadata: { title },
      },
    } = useSeo();
    return (
      <>
        <p>{title}</p>
      </>
    );
  };
  const { getByText } = render(<TestComponent />);
  expect(getByText(/site title/i)).toBeInTheDocument();
});

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './Layout';

const testComponent = (
  <HelmetProvider>
    <Layout>
      <p>hi</p>
    </Layout>
  </HelmetProvider>
);

test('it renders footer', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/waived all copyright/i)).toBeInTheDocument();
});

test('it has a header', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/jay, trying to remember/i)).toBeInTheDocument();
});

test('it renders children', () => {
  const { getByText } = render(testComponent);
  expect(getByText('hi')).toBeInTheDocument();
});

test('it sets a title from useSeo query', async () => {
  render(testComponent);
  await waitForDomChange();
  expect(document.title).toEqual('site title...');
});

test('it renders', () => {
  const container = render(testComponent);
  expect(container).toBeDefined();
});

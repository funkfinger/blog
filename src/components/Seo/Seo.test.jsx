import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Seo from './Seo';

const testComponent = (
  <HelmetProvider>
    <Seo />
  </HelmetProvider>
);

test('it can set the title with props', async () => {
  render(
    <HelmetProvider>
      <Seo pageTitle="blah" />
    </HelmetProvider>
  );
  await waitForDomChange();
  expect(document.title).toEqual('blah | site title...');
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

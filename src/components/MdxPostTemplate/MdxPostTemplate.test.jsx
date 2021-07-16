import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Gist from 'react-gist';

import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';

import PageTemplatePure from './PageTemplatePure';
import {
  mdxPostBySlugQuery,
  bodyWithYoutube,
  bodyWithGist,
} from '../../___test___/fixtures';

const components = {
  Gist,
  YouTubeVideo,
};

const {
  mdxPostBySlugQuery: {
    frontmatter: { heroImage, title, date },
    body,
  },
} = mdxPostBySlugQuery;

const testComponent = (
  <PageTemplatePure
    heroImage={heroImage}
    title={title}
    date={date}
    body={body}
  />
);

test('post can have youtube video', () => {
  const { container } = render(
    <MDXProvider components={components}>
      <MDXRenderer>{bodyWithYoutube}</MDXRenderer>
    </MDXProvider>
  );
  // console.log(container.querySelector('#kjQ7Axuyp_M'));
  expect(container.querySelector('#kjQ7Axuyp_M')).toBeInTheDocument();
});

test('post can have gist', () => {
  const { container } = render(
    <MDXProvider components={components}>
      <MDXRenderer>{bodyWithGist}</MDXRenderer>
    </MDXProvider>
  );
  const iframe = container.querySelector('#gist-351738');
  expect(iframe).toBeDefined();
  // expect(getByRole('test')).toBe('blah');
});

test('it renders', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/Post Title/i)).toBeInTheDocument();
});

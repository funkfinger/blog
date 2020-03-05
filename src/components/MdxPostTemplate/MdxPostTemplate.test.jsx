import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Gist from 'react-gist';

import { PageTemplatePure } from './MdxPostTemplate';
import { mdxPostBySlugQuery, postTestBody } from '../../___test___/fixtures';

const components = {
  Gist,
};

const {
  mdxPostBySlugQuery: {
    frontmatter: { heroImage, title, date },
    body,
  },
} = mdxPostBySlugQuery;

const postBody = postTestBody.body;

const testComponent = (
  <PageTemplatePure
    heroImage={heroImage}
    title={title}
    date={date}
    body={body}
  />
);

test('post can have gist', () => {
  const { container } = render(
    <MDXProvider components={components}>
      <MDXRenderer>{postBody}</MDXRenderer>
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

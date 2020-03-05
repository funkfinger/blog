import React from 'react';

import { PageTemplatePure } from './MdxPostTemplate';
import { mdxPostBySlugQuery } from '../../___test___/fixtures';

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

test('it renders', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/Post Title/i)).toBeInTheDocument();
});

import React from 'react';

import PostExcerpt from '../components/PostExcerpt/PostExcerpt';

import useAllPosts from '../data/useAllPostsQuery';

// const IndexPage = () => <p>hi</p>;

const IndexPage = () => {
  const data = useAllPosts();
  const postArray = data.allPostsQuery.edges;
  const posts = postArray.map(({ node }, i) => (
    <PostExcerpt
      first={i === 0}
      key={node.fields.slug}
      title={node.frontmatter.title}
      slug={node.fields.slug}
      img={node.frontmatter.heroImage}
    >
      {node.excerpt}
    </PostExcerpt>
  ));
  return posts;
};

export default IndexPage;

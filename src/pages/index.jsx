import React from 'react';

import PostExcerpt from '../components/PostExcerpt/PostExcerpt';

import useAllPosts from '../data/useAllPostsQuery';

// const IndexPage = () => <p>hi</p>;

const IndexPage = () => {
  const data = useAllPosts();
  const postArray = data.allPostsQuery.edges;
  const posts = postArray.map(({ node }) => (
    <PostExcerpt
      key={node.fields.slug}
      title={node.frontmatter.title}
      img={node.frontmatter.heroImage}
    >
      {node.excerpt}
    </PostExcerpt>
  ));
  return posts;
};

export default IndexPage;

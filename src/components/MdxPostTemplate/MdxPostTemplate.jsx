import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// eslint-disable-next-line no-unused-vars
// import '../../data/mdxPostQuery';

export default function PageTemplate({
  data: {
    mdxPostBySlugQuery: {
      frontmatter: {
        heroImage,
        // heroImage: {
        //   childImageSharp: { fluid },
        // },
        title,
        date,
      },
      body,
    },
  },
}) {
  const img = heroImage ? (
    <Img fluid={heroImage.childImageSharp.fluid} />
  ) : (
    <div className="hero-image-holder" />
  );
  return (
    <div>
      {img}
      <h1>{title}</h1>
      <h2>{date}</h2>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
}

export const pageQuery = graphql`
  query MdxPostSlugQuery($slug: String!) {
    mdxPostBySlugQuery: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        heroImage {
          childImageSharp {
            fluid(maxWidth: 840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;

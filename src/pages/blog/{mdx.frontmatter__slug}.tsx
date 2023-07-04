import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import Seo from '../../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface BlogPostProps {
  data: any;
  children: any;
}

const BlogPost = (props: BlogPostProps) => {
  const { data, children } = props;
  const image = getImage(data.mdx.frontmatter.hero_image)
  // console.log("props: ", data, children, props);
  if (!image) {
    return null;
  }
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  )
};

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
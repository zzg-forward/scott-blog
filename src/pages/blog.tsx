import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

interface BlogProps {
    data: any;
}

const BlogPage: React.FC<BlogProps> = ({ data }) => {
    return (
      <Layout pageTitle="My Blog Posts">
        <ul>
        {
          data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
          </article>
          ))
        }
        </ul>
      </Layout>
    )
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage;
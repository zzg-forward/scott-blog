import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql, Link } from 'gatsby';

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
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
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
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage;
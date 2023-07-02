import * as React from 'react';
import Layout from '../components/layout';
import type  { PageProps, HeadFC } from 'gatsby';
import Seo from '../components/seo';

const AboutPage:React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Scott">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title='About Scott'/>;
export default AboutPage;
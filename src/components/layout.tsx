import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Footer from './footer';
import NavBar from './navbar';
import { container,heading } from './styles/layout.module.css';

interface LayputPageProps {
    pageTitle: string;
    children?: any;
}

const Layout: React.FC<LayputPageProps> = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <NavBar title={data.site.siteMetadata.title} />
      <main className='px-7 py-10 of-x-hidden'>
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout;
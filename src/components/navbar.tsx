import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as navbarStyle from './styles/navbar.module.css';

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
      <header className={`${navbarStyle.header} z-40`}>
        <Link
          className="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
          to="/"
        >
          <StaticImage src='../images/icon.png' alt="logo" />
        </Link>
        <nav className={navbarStyle.nav}>
          <div className={navbarStyle.spacer} />
          <div className={navbarStyle.right}>
              <Link to="/blog" title="Blog">
              <span className="lt-md:hidden">Blog</span>
              </Link>
              <Link to="/projects" title="Projects">
              <span className="lt-md:hidden">Projects</span>
              </Link>
              <Link to="/talks" className="lt-md:hidden" title="Talks">
              Talks
              </Link>
              <Link to="/podcasts" className="lt-md:hidden" title="Podcasts">
              Podcasts
              </Link>
              {/* 暗黑模式按钮 */}
              {/* <toggle-theme /> */}
          </div>
        </nav>
      </header>
  );
}

export default NavBar;
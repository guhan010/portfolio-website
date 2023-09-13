import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title" style={{ marginLeft: "30px" }}>
        <em>tenny</em>
      </Link>
      <ul>
        <CustomLink to="/about">about</CustomLink>
        <CustomLink to="/portfolio">portfolio</CustomLink>
        <CustomLink to="/blog">blog</CustomLink>
        <CustomLink to="/resume">resume</CustomLink>
        <CustomLink to="/contact">contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

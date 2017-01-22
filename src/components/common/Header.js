import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

//stateless components
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"|"}
      <Link to="/about" activeClassName="active">About</Link>
      {"|"}
      <Link to="/course" activeClassName="active">Courses</Link>
    </nav>
  );
};

export default Header;

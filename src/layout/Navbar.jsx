import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header>
      <nav>
        <p>Book Buddy</p>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="">Log In</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

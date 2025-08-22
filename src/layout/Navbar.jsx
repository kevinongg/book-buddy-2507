import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <NavLink to="/books">
            <img src="/books.png" alt="books" />
            Book Buddy
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

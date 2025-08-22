import { NavLink } from "react-router";
import { useAuth } from "../auth/authContext";

const Navbar = () => {
  const { token, logout } = useAuth();
  return (
    <header>
      <nav>
        <div className="nav left">
          <NavLink to="/books">
            <img src="/books.png" alt="books" />
            Book Buddy
          </NavLink>
        </div>
        <div className="nav right">
          <NavLink to="/books">Books</NavLink>
        </div>
        {token ? (
          <div className="nav right">
            <NavLink to="/account">Account</NavLink>
            <NavLink to="/books" onClick={() => logout()}>
              Log Out
            </NavLink>
          </div>
        ) : (
          <div className="nav right">
            <NavLink to="/login">Log In</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

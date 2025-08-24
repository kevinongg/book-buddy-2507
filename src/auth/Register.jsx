import { useState } from "react";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const { register } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const tryRegister = async (formData) => {
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await register({ firstName, lastName, email, password });
      navigate("/books");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="register-container">
      <h1>Register for an account</h1>
      <form action={tryRegister}>
        <label>
          First Name
          <input type="text" name="first-name" />
        </label>
        <label>
          Last Name
          <input type="text" name="last-name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button>Register</button>
        {error && <output>{error}</output>}
      </form>
      <div className="login-link">
        <Link to="/login">Already have an account? Log in here.</Link>
      </div>
    </div>
  );
};

export default Register;

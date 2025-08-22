import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const tryRegister = (formData) => {
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      Register({ firstName, lastName, email, password });
      navigate("/books");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
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
      <Link to="/login">Already have an account? Log in here.</Link>
    </>
  );
};

export default Register;

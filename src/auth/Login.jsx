import { useState } from "react";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const tryLogin = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await login({ email, password });
      navigate("/books");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Log in to your account</h1>
      <form action={tryLogin}>
        <label>
          Email
          <input
            type="email"
            placeholder="12345@gmail.com"
            name="email"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />
        </label>
        <button>Login</button>
        {error && <output>{error}</output>}
      </form>
      <Link to={"/register"}>Need an account? Register here.</Link>
    </>
  );
};

export default Login;

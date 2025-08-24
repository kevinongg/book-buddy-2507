import useQuery from "../api/useQuery";
import { useAuth } from "./authContext";
import { Link } from "react-router";
import Reservations from "./Reservations";

const Account = () => {
  const { token } = useAuth();
  const { data: user } = useQuery("/users/me", "user");
  // console.log(user);

  if (!token)
    return (
      <p>
        Please <Link to="/login">log in</Link> to see your account
      </p>
    );
  if (!user) return <p>No user data</p>;

  return (
    <div className="account">
      <div>
        <h1>Welcome, {user.firstname}</h1>
        <p>Your email on file with us is {user.email}</p>
      </div>
      <div>
        <h2>Your reservations</h2>
        <Reservations user={user} />
      </div>
    </div>
  );
};

export default Account;

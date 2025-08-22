import ReserveBook from "./ReserveBook";
import SingleBookDetail from "./SingleBookDetail";
import { useAuth } from "../auth/authContext";

const SingleBookPage = () => {
  const { token } = useAuth();
  return (
    <>
      <SingleBookDetail />
      {token && <ReserveBook />}
    </>
  );
};

export default SingleBookPage;

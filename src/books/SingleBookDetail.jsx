import useQuery from "../api/useQuery";
import { useParams } from "react-router";
import ReserveBook from "./ReserveBook";
import { useAuth } from "../auth/authContext";

const SingleBookDetail = () => {
  const { token } = useAuth();
  const { bookId } = useParams();
  const { data: book, loading, error } = useQuery(`/books/${bookId}`, "book");
  // console.log(book);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Book not found</p>;

  return (
    <>
      <div className="books">
        <img src={book?.coverimage} />
      </div>
      <div>
        <h2>{book?.title}</h2>
        <p>{book?.author}</p>
        <p>{book?.description}</p>
        {token && <ReserveBook book={book} />}
      </div>
    </>
  );
};

export default SingleBookDetail;

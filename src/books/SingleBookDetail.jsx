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
    <div className="books single">
      <div className="book-imgDiv">
        <img src={book?.coverimage} />
      </div>
      <div>
        <h2 className="books-title">{book?.title}</h2>
        <p className="books-author">{book?.author}</p>
        <p className="books-description">{book?.description}</p>
        {token && <ReserveBook book={book} />}
      </div>
    </div>
  );
};

export default SingleBookDetail;

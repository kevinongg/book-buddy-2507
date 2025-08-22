import useQuery from "../api/useQuery";
import { useParams } from "react-router";

const SingleBookDetail = () => {
  const { bookId } = useParams();
  const { data: book, loading, error } = useQuery(`/books/${bookId}`, "book");
  console.log(book);
  return (
    <>
      <div className="books">
        <img src={book?.coverimage} />
      </div>
      <div>
        <h2>{book?.title}</h2>
        <p>{book?.author}</p>
        <p>{book?.description}</p>
      </div>
    </>
  );
};

export default SingleBookDetail;

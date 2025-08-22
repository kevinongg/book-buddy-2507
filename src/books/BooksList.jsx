import useQuery from "../api/useQuery";
import { Link } from "react-router";

const BooksList = () => {
  const { data: books, loading, error } = useQuery("/books", "books");
  // console.log(books);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No books found</p>;

  return (
    <>
      {books?.map((book) => {
        return (
          <div key={book.id} className="books">
            <div>
              <img src={book.coverimage} alt={book.title} />
            </div>
            <div>
              <Link to={`/books/${book.id}`}>
                <h2>{book.title}</h2>
              </Link>
              <p>{book.author}</p>
              <p>{book.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BooksList;

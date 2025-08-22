import useMutation from "../api/useMutation";
import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

const ReserveBook = ({ book }) => {
  const { bookId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // const { data, query } = useQuery(`${API}/books/${bookId}`, "book");

  // const headers = { "Content-Type": "application/json" };
  // if (token) headers["Authorization"] = `Bearer ${token}`;

  const { mutate, data } = useMutation("PATCH", `/books/${bookId}`, ["book"]);
  console.log(data);

  const reserve = async () => {
    setLoading(true);
    setError(null);
    try {
      await mutate({ available: false });
      navigate("/account");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={reserve} type="button" disabled={!book?.available}>
        {/* {book?.available ? "Reserve this book" : "Book is already reserved"}  */}
        {loading
          ? "Reserving..."
          : book?.available
          ? "Reserve this book"
          : "Book is already reserved"}
      </button>
    </>
  );
};

export default ReserveBook;

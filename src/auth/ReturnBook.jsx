import useMutation from "../api/useMutation";
import { useState } from "react";

const ReturnBook = ({ reservationId }) => {
  const { mutate } = useMutation("DELETE", `/reservations/${reservationId}`, [
    "user",
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("reservationId:", reservationId);

  const removeBook = async () => {
    setLoading(true);
    setError(null);
    try {
      await mutate();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={removeBook}>
        {loading ? "Returning..." : error ? error : "Return Book"}
      </button>
    </div>
  );
};

export default ReturnBook;

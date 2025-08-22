import ReturnBook from "./ReturnBook";
import { Link } from "react-router";

const Reservations = ({ user }) => {
  // console.log(user);
  const reservations = user.reservations;
  if (reservations.length === 0)
    return (
      <p>
        You have not reserved any books yet. Browse{" "}
        <Link to="/books">our catalog</Link>!
      </p>
    );
  console.log(reservations);
  return (
    <div>
      {reservations.map((reservation) => {
        return (
          <div key={reservation.id}>
            {reservation.title}
            {reservation.author}
            <ReturnBook reservationId={reservation.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Reservations;

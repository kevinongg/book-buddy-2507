import ReturnBook from "./ReturnBook";
import { Link } from "react-router";

const Reservations = ({ user }) => {
  // console.log(user);
  const reservations = user.reservations;
  console.log(reservations);
  if (reservations.length === 0)
    return (
      <p>
        {"You have not reserved any books yet. Browse "}
        <Link to="/books">our catalog</Link>!
      </p>
    );
  return (
    <div>
      {reservations.map((reservation) => {
        return (
          <div key={reservation.id} className="reserved-books">
            {<Link to={"/books/:bookId"}>{reservation.title}</Link>}
            {reservation.author}
            <ReturnBook reservationId={reservation.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Reservations;

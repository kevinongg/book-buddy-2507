import { Link } from "react-router";

const FilteredResults = ({ searchResults, backToBooks }) => {
  return (
    <>
      <div className="back">
        <button onClick={backToBooks}>Back to all Books</button>
      </div>
      {searchResults.map((results) => {
        return (
          <div className="books" key={results.id}>
            <div className="book-imgDiv">
              <img src={results.coverimage} alt={results.title} />
            </div>
            <div>
              <Link to={"/books/:bookId"}>
                <h2 className="books-title">{results.title}</h2>
              </Link>
              <p className="books-author">{results.author}</p>
              <p className="books-description">{results.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FilteredResults;

const FilteredResults = ({ searchResults, backToBooks }) => {
  return (
    <>
      <div>
        <button onClick={backToBooks}>Back to all Books</button>
      </div>
      {searchResults.map((results) => {
        return (
          <div key={results.id}>
            <div className="books">
              <img src={results.coverimage} alt={results.title} />
            </div>
            <div>
              <h2>{results.title}</h2>
              <p>{results.author}</p>
              <p>{results.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FilteredResults;

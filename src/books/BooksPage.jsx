import BooksList from "./BooksList";
import SearchBar from "./SearchBar";
import useQuery from "../api/useQuery";
import { useState } from "react";
import FilteredResults from "./FilteredResults";

const BooksPage = () => {
  const { data: books, loading, error } = useQuery("/books", "books");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  // console.log(books);
  const filteredResultPasser = (result) => {
    setSearchResults(result);
    setSearching(true);
  };

  const backToBooks = () => {
    setSearchResults(null);
    setSearching(false);
  };

  return (
    <>
      <h1>Catalog</h1>
      <SearchBar books={books} filteredResults={filteredResultPasser} />
      {searching ? (
        <FilteredResults
          searchResults={searchResults}
          backToBooks={backToBooks}
        />
      ) : (
        <BooksList books={books} loading={loading} error={error} />
      )}
    </>
  );
};

export default BooksPage;

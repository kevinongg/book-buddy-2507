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
  const xyz = (result) => {
    setSearchResults(result);
    setSearching(true);
  };

  return (
    <>
      <h1>Catalog</h1>
      <SearchBar books={books} results={xyz} />
      <FilteredResults searchResults={searchResults} />
      <BooksList books={books} loading={loading} error={error} />
    </>
  );
};

export default BooksPage;

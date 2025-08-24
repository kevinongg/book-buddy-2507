import BooksList from "./BooksList";
import SearchBar from "./SearchBar";
import useQuery from "../api/useQuery";
import { useState } from "react";
import FilteredResults from "./FilteredResults";

const BooksPage = () => {
  const { data: books, loading, error } = useQuery("/books", "books");
  const [searchResults, setSearchResults] = useState([]);

  // console.log(books);

  return (
    <>
      <h1>Catalog</h1>
      <SearchBar books={books} />
      <FilteredResults />
      <BooksList books={books} loading={loading} error={error} />
    </>
  );
};

export default BooksPage;

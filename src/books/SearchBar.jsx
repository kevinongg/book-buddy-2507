// import { useState } from "react";
// import FilteredResults from "./FilteredResults";

const SearchBar = ({ books, filteredResults }) => {
  // const [searchResults, setSearchResults] = useState([]);

  const search = (formData) => {
    const searchData = formData.get("searchText");
    const userInputSearch = searchData.toLowerCase().trim();
    // console.log(userInputSearch);

    const filtered = books.filter((book) => {
      const filteredTitle = book.title.toLowerCase().includes(userInputSearch);
      const filteredAuthor = book.author
        .toLowerCase()
        .includes(userInputSearch);
      return filteredTitle || filteredAuthor;
    });
    // console.log(filtered);
    filteredResults(filtered);
    console.log(filteredResults);
  };

  return (
    <>
      <form action={search}>
        <label>
          <input
            type="text"
            name="searchText"
            placeholder="Search for a book..."
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {/* <FilteredResults searchResults={searchResults} /> */}
    </>
  );
};

export default SearchBar;

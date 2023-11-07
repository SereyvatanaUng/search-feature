import { debounce } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ posts, setSearchResults }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );
    console.log(resultsArray);

    setSearchResults(resultsArray);
  };

  const debouncedSearchChange = debounce(handleSearchChange, 500);

  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          id="search"
          onChange={debouncedSearchChange}
        />
        <button className="search__button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
}

export default SearchBar;

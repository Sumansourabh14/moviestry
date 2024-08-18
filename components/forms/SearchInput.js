import { Input } from "../ui/input";

const SearchInput = ({ query, handleQueryChange }) => {
  return (
    <Input
      type="text"
      placeholder="Search for movies..."
      value={query}
      onChange={handleQueryChange}
      required
    />
  );
};

export default SearchInput;

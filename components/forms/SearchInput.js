import { Input } from "../ui/input";

const SearchInput = ({ query, handleQueryChange }) => {
  return (
    <section>
      <Input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleQueryChange}
        required
      />
    </section>
  );
};

export default SearchInput;

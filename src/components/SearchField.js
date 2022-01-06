import {IoSearch} from "react-icons/io5";

const SearchField = () => {
  return (
    <div className="Home__search">
      <input type="text" name="search-field" id="search-field" placeholder="search..." />
      <button type="submit"><IoSearch /></button>
    </div>
  );
}
 
export default SearchField;
import css from "./SearchBox.module.css";

const SearchBox = ({ handleChange }) => {
  return (
    <>
      <p className={css.searchBoxText}>Find contact by name</p>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter name..."
        className={css.searchBoxInput}
      />
    </>
  );
};

export default SearchBox;

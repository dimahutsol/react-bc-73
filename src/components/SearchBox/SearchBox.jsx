import css from "./SearchBox.module.css";

export const SearchBox = ({ handleSearch }) => {
  return (
    <div className={css.box}>
      <p className={css.name}>Find your todo</p>
      <input onChange={handleSearch} type="text" />
    </div>
  );
};

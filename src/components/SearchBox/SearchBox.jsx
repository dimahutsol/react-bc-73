import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "reduxStore/todos/selectors";
import css from "./SearchBox.module.css";
import { updateFilter } from "reduxStore/todos/filterSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <div className={css.box}>
      <p className={css.name}>Find your todo</p>
      <input
        value={value}
        onChange={(e) => {
          dispatch(updateFilter(e.target.value));
        }}
        type="text"
      />
    </div>
  );
};

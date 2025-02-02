import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);

  return (
    <label className={s.searchBox}>
      Find contacts by name:
      <input
        type="text"
        className={s.searchInput}
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default SearchBox;

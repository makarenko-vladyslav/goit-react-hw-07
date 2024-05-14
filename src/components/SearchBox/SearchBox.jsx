import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, selectName } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";
import { selectContacts, selectVisibleContacts } from "../../redux/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectName);
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    contacts.items.length > 0 &&
    visibleContacts && (
      <div className={css.inputWrapper}>
        <p>Find contact by name</p>
        <input
          className={css.field}
          type="text"
          value={searchValue}
          onChange={(e) => dispatch(setStatusFilter(e.target.value))}
        />
      </div>
    )
  );
}

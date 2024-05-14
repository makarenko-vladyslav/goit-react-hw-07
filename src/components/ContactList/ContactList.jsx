import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <h3>You don`t have any contacts</h3>
      )}
    </ul>
  );
}

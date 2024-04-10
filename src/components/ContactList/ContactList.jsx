import { useSelector } from "react-redux"
import Contact from "../Contact/Contact.jsx"
import css from "../ContactList/ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

    return (
        contacts && <ul className={css.list}>
            {
                contacts.map((item) =>
                    <li key={item.id}>
                        <Contact data={item} />
                    </li>)
            }
        </ul>
    );
}
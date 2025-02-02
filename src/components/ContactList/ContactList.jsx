import { useEffect } from "react"; // Додаємо імпорт useEffect
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSelectors";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <p className={s.error}>Error: {error}</p>}
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;

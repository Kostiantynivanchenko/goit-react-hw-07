import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { selectLoading, selectError } from "../redux/contactsSelectors";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Loader from "./Loader/Loader";
import styles from "./App.module.css";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      {isLoading && <Loader />}
      {error && <p className={styles.error}>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default App;

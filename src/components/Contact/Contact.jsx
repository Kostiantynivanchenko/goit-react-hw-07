import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaTrash } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <p className={s.name}>{name}</p>
        <p className={s.number}>{number}</p>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
        aria-label="Delete contact"
      >
        <FaTrash />
      </button>
    </li>
  );
};

// Додаємо перевірку пропсів
Contact.propTypes = {
  id: PropTypes.string.isRequired, // ID повинен бути рядком і обов’язковим
  name: PropTypes.string.isRequired, // Ім'я контакту обов'язкове
  number: PropTypes.string.isRequired, // Номер телефону теж обов'язковий
};

export default Contact;

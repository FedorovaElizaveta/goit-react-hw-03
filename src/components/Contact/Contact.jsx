import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact }) => {
  const { name, number } = contact;

  return (
    <li className={css.contactCardContainer}>
      <div className={css.t}>
        <div className={css.contactCardInfo}>
          <FaUser size={30} />
          <p>{name}</p>
        </div>
        <div className={css.contactCardInfo}>
          <FaPhoneAlt size={30} />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.contactCardBtn} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;

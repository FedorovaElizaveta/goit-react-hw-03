import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};

export default ContactList;

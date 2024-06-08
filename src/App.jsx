import "./App.css";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import data from "./data.json";

function App() {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(data);

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase().trim();
    setFilter(inputValue);
  };

  useEffect(() => {
    const filtredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
    setFilteredContacts(filtredContacts);
  }, [filter, contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox handleChange={handleChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contacts from "./contacts.json";

function App() {
  const [contact, setContact] = useState(contacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contact} />
    </div>
  );
}

export default App;

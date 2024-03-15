import './App.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useEffect, useState } from 'react';
import { SearchBox } from './SearchBox/SearchBox';

export function App() {
  const storedContacts = window.localStorage.getItem('someContacts');

  const [contacts, setContacts] = useState(
    storedContacts
      ? JSON.parse(storedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
  );

  useEffect(() => {
    window.localStorage.setItem('someContacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };

  const filteredContacts = contacts.filter(someContact =>
    someContact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDelete = idToDelete => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== idToDelete)
    );
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        setContacts={setContacts}
        onDelete={handleDelete}
      />
    </div>
  );
}

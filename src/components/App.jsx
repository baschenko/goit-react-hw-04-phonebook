import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export function App() {
  
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  
  const contactsLocal = JSON.parse(window.localStorage.getItem('contacts'));
  
  useEffect(() => {
    if (contactsLocal) {
      setContacts(contactsLocal);
    }
  }, []);

  useEffect(() => {
    if (contacts !== contactsLocal) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts, contactsLocal]);

  const addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const normalizedName = name.toLowerCase();

    const isInContacts = contacts.find(el => {
      return el.name.toLowerCase() === normalizedName;
    });

    if (isInContacts !== undefined) {
      alert(`${name} is alredy in contactes`);
      return;
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };

  
  const visibleContact = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContact} onDeleteContact={deleteContact} />
    </Container>
  );
}



import React from 'react';
import PropTypes from 'prop-types';
import { ContactButton, ContactItem, List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name} - {number}
          <ContactButton onClick={() => onDeleteContact(id)}>
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

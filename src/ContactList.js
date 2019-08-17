import React from 'react'
import ContactItem from './ContactItem'

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="contact-list">
      {contacts.map(function(el) {
        return <ContactItem deleteContact={deleteContact} contact={el} />
      })}
    </div>
  )
}

export default ContactList

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import nameToInitials from './nameToInitials'

function ContactItem({ contact, deleteContact }) {
  return (
    <div className="contact-item">
      <div className="contact-item__image">{nameToInitials(contact.name)}</div>
      <div className="contact-item__content">
        <div className="contact-item__name">{contact.name}</div>
        <div className="contact-item__number">{contact.phoneNumber}</div>
      </div>
      <a
        href="##"
        className="contact-item__remove-button"
        onClick={function() {
          deleteContact(contact.id)
        }}
      >
        <FontAwesomeIcon size="lg" icon={faTimes} color="#f16e6e" />
      </a>
    </div>
  )
}

export default ContactItem

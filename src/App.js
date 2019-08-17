import React, { useState } from 'react'

import Header from './Header'
import ContactList from './ContactList'
import AddForm from './AddForm'

const defaultContacts = [
  {
    id: 0,
    name: 'Andre Hoffman',
    phoneNumber: '+216 54 545 545'
  },
  {
    id: 1,
    name: 'Alfred Huff',
    phoneNumber: '+216 54 545 545'
  },
  {
    id: 2,
    name: 'Angel Dunn',
    phoneNumber: '+216 54 545 545'
  },
  {
    id: 3,
    name: 'Bertie Evans',
    phoneNumber: '+216 54 545 545'
  },
  {
    id: 4,
    name: 'Bryan Luna',
    phoneNumber: '+216 54 545 545'
  },
  {
    id: 5,
    name: 'Brent Car',
    phoneNumber: '+216 54 545 545'
  },
  {
    id: 6,
    name: 'Bobby Welch',
    phoneNumber: '+216 54 545 545'
  }
]

function App() {
  const [searchString, setSearchString] = useState('')
  const [contacts, setContacts] = useState(defaultContacts)
  const [isFormVisible, setIsFormVisible] = useState(false)
  function addContact(name, number) {
    const newContact = { id: Math.random(), name: name, phoneNumber: number }
    setContacts([newContact].concat(contacts))
  }
  function deleteContact(id) {
    setContacts(
      contacts.filter(function(el) {
        if (el.id === id) {
          return false
        } else return true
      })
    )
  }
  function showForm() {
    setIsFormVisible(true)
  }
  function hideForm() {
    setIsFormVisible(false)
  }
  return (
    <div className="contact-list-app">
      <Header
        showForm={showForm}
        numberOfContacts={contacts.length}
        search={searchString}
        setSearchString={setSearchString}
      />
      {isFormVisible && <AddForm hideForm={hideForm} addContact={addContact} />}
      <ContactList
        deleteContact={deleteContact}
        contacts={contacts.filter(function(el) {
          return el.name.toLowerCase().includes(searchString.toLowerCase())
        })}
      />
    </div>
  )
}
export default App

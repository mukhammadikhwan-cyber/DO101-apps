import React, { useEffect, useState } from 'react'

function App() {
  const [contacts, setContacts] = useState([])

  // Fetch contacts from the backend API
  useEffect(() => {
    fetch('http://localhost:8080/contacts') // Adjust URL for production
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching contacts:', error))
  }, [])

  return (
    <div>
      <h1>Contact List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App

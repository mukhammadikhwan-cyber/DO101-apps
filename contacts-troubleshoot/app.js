// /contacts-troubleshoot/app.js

const express = require('express')
const { Pool } = require('pg')
const config = require('../db/config') // Adjusted the import path to go up one level to db/config.js
const app = express()

// Set up PostgreSQL connection pool using environment variables from OpenShift
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

// Route to fetch contacts and display them
app.get('/', async (req, res) => {
  try {
    // Query the contacts table
    const result = await pool.query('SELECT * FROM contacts')

    // Check if there are any contacts
    if (result.rows.length === 0) {
      res.send('No contacts found.\n')
    } else {
      // Display contacts as HTML
      let html = '<h1>Contact List</h1>'
      html +=
        '<table border="1"><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th></tr>'

      // Loop through the rows and generate table rows
      result.rows.forEach((contact) => {
        html += `<tr><td>${contact.id}</td><td>${contact.first_name}</td><td>${contact.last_name}</td><td>${contact.email}</td></tr>`
      })

      html += '</table>'
      res.send(html)
    }
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error.\n')
  }
})

// Start the server using the port from environment variable (set in OpenShift)
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(
    `Server running on port ${port} in ${
      process.env.NODE_ENV || 'production'
    } mode.`,
  )
})

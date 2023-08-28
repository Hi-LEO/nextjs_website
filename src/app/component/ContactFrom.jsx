"use client"
import React from 'react'
import styles from '@/app/contact/contact.module.css'

import { useState } from 'react'
const ContactFrom = () => {

  const [status, setstatus] = useState()

  const [User, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const eventhandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...User, [name]: value })

  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          name: User.name,
          email: User.email,
          phone: User.phone,
          message: User.message
        })
      })
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          name: "",
          email: "",
          phone: "",
          message: ""
        })
        setstatus('success');
      } else {
        setstatus('error');
      }

    } catch (e) {
      console.log(e)
    }


  }
  return (
    <>
      <form className={styles.contact_form} onSubmit={handlesubmit}>
        <div className={styles.input_field}>
          <label htmlFor='username' className={styles.label}>
            name:
            <input type="text" name='name' id='username'
              onChange={eventhandle}
              value={User.name}
              placeholder='Enter your name'

            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor='username' className={styles.label}>
            Email:
            <input type="text" name='email' id='username'
              onChange={eventhandle}
              value={User.email}
              placeholder='Enter your name'

            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor='username' className={styles.label}>
            phone no:
            <input type="text" name='phone' id='username'
              onChange={eventhandle}
              value={User.phone}
              placeholder='Enter your phone no'

            />
          </label>
        </div>
        <div className={styles.input_field}>
          message
          <label htmlFor='username' className={styles.label}>
            <textarea name="message" id="message"
              onChange={eventhandle}
              value={User.message}

              placeholder='Enter you message' cols="10" rows="4" />
          </label>
        </div>
        <div >
          {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
          {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default ContactFrom
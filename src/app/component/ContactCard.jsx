import React from 'react'
import styles from '@/app/contact/contact.module.css'
import Link from 'next/link'
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

const ContactCard = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.grid_card}>
              <i><MdEmail /></i>
              <h2>Emial</h2>
              <p>Mondy to friday </p>
              <p className={styles.last_para}>responce time:</p>
              <Link href="/"> send Email </Link>
            </div>
            <div className={styles.grid_card}>
              <i><MdVoiceChat /></i>
              <h2>Emial</h2>
              <p>Mondy to friday </p>
              <p className={styles.last_para}>responce time:</p>
              <Link href="/"> send Email </Link>
            </div>
            <div className={styles.grid_card}>
              <i><MdForum /></i>
              <h2>Emial</h2>
              <p>Mondy to friday </p>
              <p className={styles.last_para}>responce time:</p>
              <Link href="/"> send Email </Link>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default ContactCard
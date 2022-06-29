import React from 'react'
import styles from '/styles/Header.module.scss'
import Head from 'next/head'
import NavItem from './NavItem'

//ontario-icon-critical-alert-warning


export default function header() {
  return (
    <div className={styles.ODSContainer} >

     

      <div className={styles.warningTop}>



        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="white" />
          <rect x="11" y="10" width="2" height="4" fill="black" />
          <rect x="11" y="16" width="2" height="2" fill="black" />
        </svg>
        <p>Follow the COVID-19 restrictions and public health measures and book your appointment to get vaccinated.</p>

      </div>
      <NavItem/>

     


    </div>
  )
}

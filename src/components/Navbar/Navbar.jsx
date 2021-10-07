import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.main}>
      <a href='/'>Home</a>
      <a href='/products'>Productos</a>
      <a href='/cart'>Cart</a>
    </div>
  )
}

export default Navbar

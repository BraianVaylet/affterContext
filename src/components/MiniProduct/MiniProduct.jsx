import React from 'react'
import styles from './MiniProduct.module.css'

const MiniProduct = ({item, count}) => {
  const {title, price, color} = item

  return (
    <div className={styles.main} style={{backgroundColor: color}}>
      <p>{title} | {count}u. x ${price}</p>      
    </div>
  )
}

export default MiniProduct

import React from 'react'
import Product from 'components/Product/Product'
import Cart from 'components/Cart/Cart'
import DATA from 'mocks/data'
import styles from './Products.module.css'

const Products = () => {
  return (
    <div className={styles.main}>
      <Cart />
      <div className={styles.products}>
        {DATA.map(item => (
          <Product {...item} />
        ))}
      </div>
    </div>
  )
}

export default Products

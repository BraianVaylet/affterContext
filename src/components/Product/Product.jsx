import React, { useContext } from 'react'
import Counter from 'components/Counter/Counter'
import styles from './Product.module.css'
import { CartContext } from 'context/CartContext'

const Product = (item) => {
  const {title, stock, price, color} = item
  const {addItem, removeItem, removeOneItem} = useContext(CartContext)

  const handleOnAdd = count => addItem(item, count)

  return (
    <div className={styles.product} style={{backgroundColor: color}}>      
      <h3>{title}</h3>
      <p>${price}</p> 
      <div className={styles.counter}>
        <Counter stock={stock} onAdd={handleOnAdd} /> 
      </div>
      <button onClick={() => removeItem(item)}>Quitar del carrito</button>
      <button onClick={() => removeOneItem(item)}>Quitar 1</button>      
    </div>
  )
}

export default Product

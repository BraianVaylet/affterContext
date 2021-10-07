import React, { useContext } from 'react'
import Counter from 'components/Counter/Counter'
import styles from './Product.module.css'
import { CartContext } from 'context/CartContext'

const Product = (item) => {
  const {id, title, stock, price, img} = item
  const {addItem, cartItems, isInCart, removeItem, removeOneItem, handleTotalPriceByItem} = useContext(CartContext)

  const handleOnAdd = count => addItem(item, count)

  return (
    <div className={styles.product}>
      {img && <img src={img.src} alt={img.alt} />}
      <h3>{title}</h3>
      <p>${price}</p> 
      <Counter stock={stock} onAdd={handleOnAdd} /> 
      <button onClick={() => isInCart(item)}>Esta en el carrito?</button> 
      <button onClick={() => removeItem(item)}>Quitar del carrito</button>
      <button onClick={() => removeOneItem(item)}>Quitar 1 elemento del carrito</button>
      <button onClick={() => handleTotalPriceByItem()}>nuevo array con precio total</button>
    </div>
  )
}

export default Product

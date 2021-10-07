import React, { useContext } from 'react'
import { CartContext } from 'context/CartContext'
import MiniProduct from 'components/MiniProduct/MiniProduct'

const Cart = () => {
  const {cartItems, total} = useContext(CartContext)
  return (
    <div>
      {cartItems.map(element => (
        <MiniProduct {...element}/>
      ))}
      {/* <p>${total.price} ({total.total}u.)</p> */}
    </div>
  )
}

export default Cart

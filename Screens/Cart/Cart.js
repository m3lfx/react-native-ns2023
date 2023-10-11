import React from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
const Cart = () => {
    const cartItems = useSelector(state => state.cartItems)
  return (
    <Text>Cart</Text>
  )
}

export default Cart
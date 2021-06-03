import React, { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider'
import { UserContext } from '../../providers/UserProvider'

function Button(props) {
    const contextCart = useContext(CartContext)
    const contextUser = useContext(UserContext)

    console.log(contextCart)
    console.log(contextUser) 

  return (
    <button type="button">
        {props.children}
    </button>
  )
}

export default Button;
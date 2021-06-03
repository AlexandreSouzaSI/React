import React, { createContext } from 'react'


export const CartContext = createContext({})


export const CartProvider = (props) => {
    return (
        <CartContext.Provider value={{
            hello: 'world'
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
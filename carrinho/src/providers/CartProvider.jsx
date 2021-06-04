import React, { createContext, useState } from 'react'


export const CartContext = createContext({})

export const CartProvider = (props) => {
    const [cart, setCart] = useState(() => {
        const storagedCart = localStorage.getItem('@carrinho:cart')

        if(storagedCart){
            return JSON.parse(storagedCart)
        }

        return []
    }) 

    const addProduct = async (productId) => {
        console.log('addProduct', productId)
    } 

    const removerProduct = productId => {
        console.log('removerProduct', productId)
    }

    return (
        <CartContext.Provider value={{ cart,addProduct, removerProduct }}>
            {props.children}
        </CartContext.Provider>
    )
}
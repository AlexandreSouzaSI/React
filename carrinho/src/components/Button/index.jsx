import React, { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider'

function Button(props) {
    const { cart, addProduct, removerProduct} = useContext(CartContext)
    
    function handleAddProduct() {
      addProduct('1')
    }

    function handleRemoveProduct() {
      removerProduct('2')
    }

    console.log(cart)

  return (
    <>
      <button onClick={handleAddProduct}>Adicionar Produto</button>
      <button onClick={handleRemoveProduct}>Remover Produto</button>
    </>
  )
}

export default Button;
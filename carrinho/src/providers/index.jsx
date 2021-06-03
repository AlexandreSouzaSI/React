import React from 'react';

import { CartProvider } from './CartProvider';
import { UserProvider } from './UserProvider';

// import { Container } from './styles';

function AppProvider(props) {
  return (
      <UserProvider>
          <CartProvider>
              {props.children}
          </CartProvider>
      </UserProvider>
  )
}

export default AppProvider;
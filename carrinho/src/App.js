import React from 'react'
import Button from './components/Button';

import AppProvider from './providers'

function App() {
  return (
    <AppProvider>
        <Button>
          <h1>Hello World</h1>
        </Button>
    </AppProvider>
  );
}

export default App;

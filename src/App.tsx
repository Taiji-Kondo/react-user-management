import React, { VFC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import theme from './theme/theme'

const App: VFC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <div>Hello World</div>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App

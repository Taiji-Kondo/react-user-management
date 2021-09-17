import React, { VFC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'

const App: VFC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>Hello World</div>
    </ChakraProvider>
  )
}

export default App

import { useState } from 'react'
import { ChakraProvider, Button, Heading } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Heading pb='10' as='h1' size='4xl' noOfLines={2} >Hi, I am Ben Kline</Heading>
      <Button 
        colorScheme='blue'
        variant='outline' 
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </ChakraProvider>
  )
}

export default App

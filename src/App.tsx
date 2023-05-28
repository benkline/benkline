import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <h1>Hi, I am Ben Kline</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </ChakraProvider>
  )
}

export default App

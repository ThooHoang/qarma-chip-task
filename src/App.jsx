import { useState } from 'react'
import Chip from './components/Chip'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chip
        label="Home Decor"
        removable={false}
      />
        
    </>
  )
}

export default App

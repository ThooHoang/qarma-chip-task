import { useState } from 'react'
import Chip from './components/Chip'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex justify-center gap-2">
      <Chip
        label="Chip"
        removable={true}
        status="yellow"
      />
      <Chip
        label="Home Decor"
        removable={true}
      />
      <Chip
        label="Home Decor"
        removable={true}
      />
    </div>
        
    </>
  )
}

export default App

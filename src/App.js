import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Box from '@material-ui/core/Box'
import TextInputComponent from './components/TextInputComponent/TextInputComponent'
import TextOutputComponent from './components/TextOutputComponent/TextOutputComponent'

function App() {
  const [isInputComponent, setIsInputComponent] = useState(true)
  const [words, setWords] = useState([])
  return (
    <Box sx={{ paddingX: 2 }}>
      <Navbar setIsInputComponent={setIsInputComponent} />
      {isInputComponent ? (
        <TextInputComponent
          setIsInputComponent={setIsInputComponent}
          setWords={setWords}
        />
      ) : (
        <TextOutputComponent words={words} />
      )}
    </Box>
  )
}

export default App

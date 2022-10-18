import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '@mui/material'
import Languages from './components/Languages'

function App() {
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    axios('/languages').then((res) => {
      setLanguages(res.data)
    })
  }, [])

  return (
    <div className='App'>
      <Container maxWidth='md'>
        <Languages languages={languages} />
      </Container>
    </div>
  )
}

export default App

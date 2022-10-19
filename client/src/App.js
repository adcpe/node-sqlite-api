import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Typography } from '@mui/material'
import Languages from './components/Languages'

function App() {
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    axios('/languages').then((res) => {
      setLanguages(res.data)
    })
  }, [])

  return (
    <div className='App' style={{ background: '#E1E9E8', padding: '30px' }}>
      <Container maxWidth='md'>
        <Typography align='center' variant='h1' gutterBottom sx={{ fontSize: 52 }}>
          List of programming languages
        </Typography>
        <Languages languages={languages} />
      </Container>
    </div>
  )
}

export default App

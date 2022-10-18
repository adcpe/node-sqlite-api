import React from 'react'
import { Grid } from '@mui/material'
import LanguageCard from './LanguageCard'

const Languages = ({ languages }) => {
  return (
    <Grid container spacing={2}>
      {languages.map((l) => (
        <Grid key={l.id} item xs={12}>
          <LanguageCard language={l} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Languages

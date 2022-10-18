import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography, Link } from '@mui/material'

const LanguageCard = ({ language }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        // component='img'
        sx={{ width: 150 }}
        image={language.logo}
        alt={language.name}
        style={{ backgroundSize: '150px 150px' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {language.name}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            {language.creator}
          </Typography>
          <Link target='_blank' rel='noopener' href={language.website}>
            {language.website}
          </Link>
        </CardContent>
      </Box>
    </Card>
  )
}

export default LanguageCard

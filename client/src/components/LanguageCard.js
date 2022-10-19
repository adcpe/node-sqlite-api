import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography, Link } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const LanguageCard = ({ language }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        sx={{ width: 150 }}
        image={language.logo}
        alt={language.name}
        style={{ minWidth: 150, backgroundSize: '150px 150px', backgroundPosition: 'center' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {language.name}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
            style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            Creator: {language.creator}
          </Typography>
          <Link target='_blank' rel='noopener' href={language.website}>
            Website <OpenInNewIcon sx={{ fontSize: 12 }} />
          </Link>
        </CardContent>
      </Box>
    </Card>
  )
}

export default LanguageCard

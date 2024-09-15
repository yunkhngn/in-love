import React from 'react'
import { Typography } from '@mui/material'

const Face = ({number, which}) => {
  return (
    <div
    className="face"
    >
      <Typography
        variant="h3"
        sx={{
          color: '#ffffde',
          fontWeight: 'bold',
        }}
      >
        {number}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#ffebcc',
          fontWeight: 'bold',
        }}
      >
        {which}
      </Typography>
    </div>
  )
}

export default Face
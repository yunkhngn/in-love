import React from 'react'
import { Typography } from '@mui/material'

const Avatar = ({lover}) => {
  console.log(lover)
  return (
    <div
    className='avatar'
    >
      <img className='logo' src={lover.avatar} alt={lover.name} />
      <Typography variant="h5"
      mt={2}
      fontWeight={500}
      >
        {lover.name}
      </Typography>
      <Typography variant="h5"
      mt={2}
      fontWeight={500}
      >
        {lover.dob}
      </Typography>
    </div>
  )
}

export default Avatar
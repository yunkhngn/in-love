import React from 'react'
import {Card} from '@mui/material'
import data from "../../lib/data"
import Avatar from './Avatar'

const Lover = () => {
    const lover = data.lover;
  return (
    <Card
    sx={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: '20px',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      width: { xs: '90%', md: '750px' },
      padding: { xs: '20px', md: '30px' },
      backgroundColor: '#ffffff60',
      marginBottom: '20px',
    }}
   >
    {lover.map((item) => (
        <Avatar key={item.id} lover={item} />
    ))}
   </Card>
  )
}

export default Lover
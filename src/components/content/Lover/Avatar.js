import React from 'react'

const Avatar = ({lover}) => {
  console.log(lover)
  return (
    <div
    className='avatar'
    >
      <img src={lover.avatar} alt={lover.name} style={{width: '100px', height: '100px', borderRadius: '50%'}}/>
      <p>{lover.name}</p>
      <p>{lover.dob}</p>
      <p>{lover.zodiac}</p>
    </div>
  )
}

export default Avatar
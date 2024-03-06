import React from 'react'

const ImageBox = ({imageUrl}) => {
  return (
    <div className=' flex items-center justify-center'>
      <img src={imageUrl} alt="image" width={500} height={500} />
    </div>
  )
}

export default ImageBox
import React from 'react'
import { NoImg } from '../assets/images'

const ImageBox = ({imageUrl}) => {
  return (
    <div className=' flex items-center justify-center'>
      {/* {imageUrl?`${<img src={imageUrl} alt="image" width={500} height={500} />}`:`
        ${<img src={NoImg} width={300} height={300} />}
      `} */}
      {imageUrl ? <img src={imageUrl} alt="image" width={500} height={500} /> : 
      <div>
        <p className=' text-xl font-palanquin font-bold text-center m-3'>Insert Image</p>
        <img src={NoImg} width={150} height={150}/> 
      </div>
      }
    </div>
  )
}

export default ImageBox
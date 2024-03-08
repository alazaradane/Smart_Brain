import React from 'react'
import { NoImg } from '../assets/images'
import '../face.css'

const ImageBox = ({imageUrl, box}) => {
  return (
    <div className=' flex items-center justify-center'>
      {imageUrl ? <img id='inputImage' src={imageUrl} alt="image" width='500px' height='auto'/> : 
      <div className=' h-auto absolute'>
        <p className=' text-xl font-palanquin font-bold text-center m-3'>Insert Image</p>
        <img src={NoImg} width={150} height={150}/>
      </div>
      }
      <div className='bounding-box' 
        style={
          {
            top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol
          }
        }>        
        </div>
      
    </div>
  )
}

export default ImageBox
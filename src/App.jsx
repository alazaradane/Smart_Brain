import React, { useState } from 'react'

import Home from './pages/Home'
import FaceRecognition from './pages/FaceRecognition'

const App = () => {

  // const [inputChange, setInputChange] = useState('')

  // const inputChange = ()=>{

  // }
  {/*
    constructor(){
      super()
      this.state ={
        input:""
      }
    }
    onInputChange = (event)=>{
      console.log(event)
    */}
    
  
    return (
      <div className=' bg-black'>

      <FaceRecognition/>
      {/* <Home/> */}
    </div>
  )

}
export default App





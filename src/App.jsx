import React, { Component } from 'react'

//import Home from './pages/Home'
import FaceRecognition from './pages/FaceRecognition'
import SignIn from './pages/SignIn'

class App extends Component {
  
    constructor() {
      super()
      this.state ={
        input:""
      }
    }

    onInputChange = (event)=>{
      console.log(event)
    }
    
    render() {
      return(
        <div className=' bg-black'>

           {/* <FaceRecognition/> */}
           {/* <Home/> */}
           <SignIn/>
        </div>
    )
    }
    
    

}


export default App





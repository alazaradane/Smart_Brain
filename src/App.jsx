import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FaceRecognition from './pages/FaceRecognition'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

class App extends Component {
  
    constructor() {
      super()
      this.state ={
        route:"home"
      }
    }
    
    onRouteChange = (route)=>{
      this.setState({route: route})
    }

    render() {
      return(
        <BrowserRouter>
          <div className='bg-black'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/facerecognition" element={<FaceRecognition />} />
              <Route path="/facerecognition/signout" element={<Home/>} />
            </Routes>
          </div>
      </BrowserRouter>
    )
    }
    
    

}


export default App





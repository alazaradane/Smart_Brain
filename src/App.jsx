import React, { Component } from 'react'

//import Home from './pages/Home'
import FaceRecognition from './pages/FaceRecognition'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

class App extends Component {
  
    constructor() {
      super()
      this.state ={
        route:"signin"
      }
    }
    
    onRouteChange = (route)=>{
      this.setState({route: route})
    }

    render() {
      return(
        <div className=' bg-black'>

           {/* <Home/> */}
           {this.state.route==='signin' ?
            <SignIn onRouteChange={this.onRouteChange}/>
            :
            
            <FaceRecognition/>
          }
        </div>
    )
    }
    
    

}


export default App





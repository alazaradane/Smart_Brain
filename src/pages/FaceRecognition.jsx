import React, { Component } from 'react'
import { useState } from 'react'
import { headerLogo, NoImg } from '../assets/images'
import Button from '../components/Button'
import ImageLinkForm from '../sections/ImageLinkForm'
import Rank from '../components/Rank'
import Clarifai from "clarifai"
import ImageBox from '../components/ImageBox'




const app = new Clarifai.App({
  apiKey:"3de2333d0548430aa691d862cff4d87d"
})


class FaceRecognition extends Component{
  constructor(){
    super()
    this.state = {
      input:"",
      imageUrl:"",
      box:{}
    }
  }

  calcFaceLocation = (data)=>{
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    //console.log(width, height)
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box)=>{
    console.log(box)
    this.setState({box: box})
  }

  onInputChange = (event)=>{
    this.setState({input: event.target.value})
  }

  onButtonSubmit = ()=>{
    this.setState({imageUrl: this.state.input})
    app.models.predict('face-detection' , this.state.input)
    .then(response => this.displayFaceBox(this.calcFaceLocation(response)))
    .catch(err =>console.log(err),
    )
  }
 

  render() {

      const {onRouteChange} = this.props
    return (
      <section 
          id='#main'
          className=' max-container bg-black h-screen  '>
      
          <nav className=' flex justify-between items-center'>
              <img src={headerLogo} alt="Logo" width={100} height={100} />
              <Button label="Sign Out" signOut onClick={()=> onRouteChange('#main')} />
          </nav>
          <div className=' flex justify-center items-center '>
              <Rank/>
          </div>
          <div className=' flex justify-center items-center'>
              <ImageLinkForm 
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
          </div>
          <div className=' p-5  bg-black flex items-center justify-center text-white relative mt-20' > 
                <ImageBox box={this.state.box} imageUrl={this.state.imageUrl}/>         
          </div>
          
      </section>
    )
    }
}

export default FaceRecognition  
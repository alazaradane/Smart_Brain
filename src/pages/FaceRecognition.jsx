import React, { Component } from 'react'
import { useState } from 'react'
import { headerLogo } from '../assets/images'
import Button from '../components/Button'
import ImageLinkForm from '../sections/ImageLinkForm'
import Rank from '../components/Rank'



class FaceRecognition extends Component{
  constructor(){
    super()
    this.state = {
      input:""
    }
  }

  onInputChange = (event)=>{
    console.log(event.target.value)
  }

  onButtonSubmit = ()=>{
    console.log('Clicked!')
    app.models.predict("3de2333d0548430aa691d862cff4d87d","https://samples.clarifai.com/face-det.jpg"),
      function(response){
        // Response
      },
      function(err){
        //error
      }
  }
 

  render() {
    return (
      <section 
          id='#main'
          className=' max-container bg-black h-screen '>
      
          <nav className=' flex justify-between items-center'>
              <img src={headerLogo} alt="Logo" width={100} height={100} />
              <Button label="Sign Out" signOut />
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
          
      </section>
    )
    }
}

export default FaceRecognition
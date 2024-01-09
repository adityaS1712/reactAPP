import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=4;

function App() {
  return <div>
   <CardWrapper>
   hi theere
   <CardWrapper>
    <TextComponent/>
   </CardWrapper>
  

   </CardWrapper>
    

  </div>
  
}



function TextComponent(){
  return <div>
    hi there from text component
  </div>
}

function CardWrapper({children}){
  console.log(children)
  return <div style={{border:"2px solid black", padding:20}}>
      {children}
  </div>

}




export default App

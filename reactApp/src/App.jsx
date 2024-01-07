import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Aditya1")

  function updateTitle(){
    setTitle("My name is  "+ Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="Aditya2"></Header>
    </div>
  )
}


const Header=React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App

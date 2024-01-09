import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=4;

function App() {
  const [todos,setTodos]=useState([])
  //cannot async the useEffect function
  //use promises
  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
    .then( async function (res){
      const json= await res.json();
      setTodos(json.todos);
    } )
    
    },10000)

  },[])
  return <div>
  {todos.map(todo => <Todo key ={todo.id} title={todo.title} description={todo.description}></Todo>)}

  </div>
  
}


function Todo({title,description}){
  return(
  <div>
<h1>
  {title}
</h1>
<h4>
  {description}
  </h4>


  </div>
  );

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

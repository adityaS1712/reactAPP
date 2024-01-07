import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=4;

function App() {
  const [todos,setTodos] = useState([{
    id:1,
    title:"Go to gym",
    description:"Go to gym today"
  },{
    id:2,
    title:"Go to gym 2",
    description:"Go to gym today 2"
  },{
    id:3,
    title:"Go to gym 3",
    description:"Go to gym today 3"
  }])

function addTodo(){
  setTodos([...todos,{
    id:counter++,
    title:Math.random(),
    description:Math.random()

  }])
}

return <div>
  <button onClick={addTodo}>Add todo here</button>
        {todos.map(function(todo){
          return <Todo  key={todo.id} title={todo.title} description={todo.description}/>
        })}
        {/* {todos.map((todo) => (
  <Todo key={todo.id} title={todo.title} description={todo.description} />
))} */}

</div>

}
function Todo({title,description }){
  return<div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>

}




export default App

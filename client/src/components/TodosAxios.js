import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function TodosAxios() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then( (res) => {
          console.log(res.data)
          setTodos(res.data)
      })
  }, [])

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>Todo Title: {todo.title}</h1>
          </div>
        )
      })}
    </div>
  )
}
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function TodosAsync() {

  const [todos, setTodos] = useState([])

  useEffect(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    let data = res.data;
    setTodos(data)
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
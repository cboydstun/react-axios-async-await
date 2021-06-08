import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function TodosAxios() {
  const URL = "https://jsonplaceholder.typicode.com/todos"

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
          console.log(res.data)
          setTodos(res.data)
      })
  }, [])

  return (
    <div>
      {
        todos.map((todo) => {
            return (
            <div key={todo.id}>
                <h1>Todo Title: {todo.title}</h1>
            </div>
            )
        })
      }
    </div>
  )
}
import React from 'react'

import TodosFetch from './components/TodosFetch'
import TodosAxios from './components/TodosAxios'
import TodosAsync from './components/TodosAsync'

export default function App() {
    return (
        <div>
            {/* <TodosFetch /> */}
            <TodosAxios />
            <TodosAsync />
        </div>
    )
}

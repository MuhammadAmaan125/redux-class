import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/counter/counter'
import Todo from './components/todolist/todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Counter/>
  */}
 <Todo/>
    </>
  )
}

export default App

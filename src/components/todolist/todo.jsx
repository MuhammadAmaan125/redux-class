import React, { useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { addTodo } from '../../store/slices/todoSlice/todoSlice'

function todo() {
const [input,setInput]=useState('')
const dispath = useDispatch()
function handleAdd(){
    dispath(addTodo(input))
    setInput('')

}
const todo = useSelector((state)=>state.todo)
console.log(todo);
return (
    <>
            <div>
            <input type="text" placeholder='Enter your todo' value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick= {handleAdd}>Add</button>
                </div>
                <div>
                  <ul>
                    {todo.todo.map((item,index)=>{
                      return(
                        <li key={index}>{item.text}</li>
                      )
                    })

                    }
                    </ul>
                </div>
    </>
    
  )
}

export default todo

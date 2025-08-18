import React, { useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { addTodo, remove ,editTodo} from '../../store/slices/todoSlice/todoSlice'

function todo() {
const [input,setInput]=useState('')
const [editId, setEditingId]=useState(null)
const [editText, setEditText]=useState('')
const dispath = useDispatch()
function handleAdd(){

  
    dispath(addTodo({input}))

    setInput('')

}
const saveEdit = (id,text)=>{
  dispath(editTodo({id,text}))
  setEditingId(null)
  setEditText('')

}


const edittodo = (id,text)=>{
  setEditingId(id)
  setEditText(text)
}


const removeTodo = (id)=>{
  dispath(remove(id))
}
console.log(removeTodo);

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
                <>

                <div>
                  {editId===item.id?
                  <div>
                    <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} />
                    <button onClick={()=>saveEdit(editId,editText)}>Save</button>
                  </div>
                  :
                  <div>
                    <li  style={{color:"red"}} key={index}>{item.text}</li>
                    <button onClick={remove}>Remove</button>
                    <button onClick={()=>edittodo(item.id,item.text)}>Edit</button>
                  </div>
                  }
                </div>
                        {/* <div>
                        <li  style={{color:"red"}} key={index}>{item.text}</li>
                        <button onClick={remove}>Remove</button>
                        <button onClick={()=>editTodo(item.id,item.text)}>Edit</button>
                        </div> */}
                </>

                
                      )
                    })

                    }
                    </ul>
                </div>
    </>
    
  )
}

export default todo

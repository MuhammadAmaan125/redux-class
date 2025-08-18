import { createSlice, nanoid } from '@reduxjs/toolkit'
import todo from '../../../components/todolist/todo'

const initialState = {
  todo :[]
}
console.log(initialState);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        console.log(action.payload);
    const newTodo = {
      id: nanoid(),
      text: action.payload.input,

    }
        state.todo.push(newTodo)
    },
    remove: (state , action) => {
    state.todo =state.todo.filter((abc) => abc.id !== action.payload)
    console.log(state.todo);
    },
    editTodo: (state,action)=>{
      const {id,text} = action.payload
      const todoToEdit = state.todo.find((todo)=>todo.id === id)
      if(todoToEdit){
        todoToEdit.text = text
      }
    }

  },
})

export const { addTodo , remove,editTodo} = todoSlice.actions

export default todoSlice.reducer
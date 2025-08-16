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

        
    }
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
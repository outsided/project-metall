import { createSlice } from "@reduxjs/toolkit";

type Todo = {
    id:number,
    text:string,
}
type todoState={
    todo:Todo[]

}

const initialState:todoState = {
    todo:[]
} 
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state){
           console.log(state,2312)
        },
    }
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
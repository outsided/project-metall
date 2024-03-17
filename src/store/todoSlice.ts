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
        addTodo(state,action){
           console.log(2312)
        },
        removeCard(state,action){
            console.log('remove')
        },
    }
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
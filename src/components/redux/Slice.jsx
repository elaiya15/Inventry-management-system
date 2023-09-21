/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
const initialState={taskList:[{name:"elaiya" ,tag:"hello",image:"",id:"1"},{name:"sabari" ,tag:"hello",image:"",id:"2"},{name:"navi" ,tag:"hello",image:"",id:"3"}],
selectedTask:{}}

const Slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addTask:(state,action)=>{
      // eslint-disable-next-line no-unused-vars
      const id = state.taskList.length+1

     const data= state.taskList.push({...action.payload,id:id})
    },

    delectTask:(state,action)=>{
      const {id} =(action.payload)
     state.taskList = state.taskList.filter((task) => task.id !== id); 
    },
    
    listUpdate:(state,action)=>{
      console.log(action.payload);
      state.selectedTask = action.payload
    },
    updateTask:(state,action)=>{
       console.log(action.payload)
      state.taskList = state.taskList.map((task) => task.id == action.payload.id ? action.payload : task )
       console.log(state.taskList);
    },
  },
});

export const { addTask,delectTask, listUpdate,updateTask } = Slice.actions;

export default Slice.reducer;
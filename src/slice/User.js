import { createSlice } from "@reduxjs/toolkit"

const initialState={
    user:null,
}
export const Userslice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        removeUser:(state,action)=>{
            state.user=null
        }
    }
})
export const{setUser,removeUser}=Userslice.actions
export default Userslice.reducer
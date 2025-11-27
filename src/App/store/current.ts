import { createSlice } from '@reduxjs/toolkit'
import { emptyMeme, type MemeInterface  } from 'orsys-tjs-meme';

const initialState: { meme:MemeInterface } = {
    meme:emptyMeme
}

const current = createSlice({
  name: 'current',
  initialState,
  reducers: {
    update: (state, action:{payload:MemeInterface,type:string})=>{
        state.meme = action.payload;
    },
    clear:(state)=>{
        state.meme = emptyMeme;
    }
  }
});

export const {clear, update} = current.actions;

const currentReducer = current.reducer; 

export default currentReducer;
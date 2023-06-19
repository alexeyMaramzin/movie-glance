import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        toggleFavourite: (state, {payload: movie})=>{
            const isExist = state.some(m => m.filmId===movie.filmId)
            if(isExist) {
                const index = state.findIndex(item=>item.filmId===movie.filmId)
                if(index!==-1){
                    state.splice(index, 1)
                }
            }
            else state.push(movie)
        }
    }
})
export const {actions, reducer} = favouriteSlice
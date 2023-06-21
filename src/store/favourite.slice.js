import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        toggleFavourite: (state, {payload: movie})=>{
            const isExist = movie.filmId?state.some(m => m.filmId===movie.filmId):state.some(m => m.id===movie.id)
            if(isExist) {
                const index = movie.filmId?state.findIndex(item=>item.filmId===movie.filmId):state.findIndex(item=>item.id===movie.id);
                localStorage.removeItem('liked', JSON.stringify(movie))
                if(index!==-1){
                    state.splice(index, 1)
                }
            }
            else {state.push(movie); localStorage.setItem('liked', JSON.stringify(state))}
        }
    }
})
export const {actions, reducer} = favouriteSlice
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {reducer as favouriteReducer} from './favourite.slice'

const reducers = combineReducers({
    favourite: favouriteReducer,
})

export const store = configureStore({
    reducer: reducers,
})



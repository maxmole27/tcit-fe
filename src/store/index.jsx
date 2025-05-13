import { configureStore } from '@reduxjs/toolkit'
import postReducer from './store'

const store = configureStore({
  reducer: {
    post: postReducer,
  }
})

export default store
import { createSlice } from '@reduxjs/toolkit'

const postSlice = createSlice({
  name: 'post',
  initialState: {
    filterText: '',
    postList: [],
    
  },
  reducers: {
    addPost: (state, action) => {
      state.postList.push(action.payload)
    },
    setPosts: (state, action) => {
      state.postList = action.payload
    },
    setFilterText: (state, action) => {
      state.filterText = action.payload
    }
  }
})

export default postSlice.reducer
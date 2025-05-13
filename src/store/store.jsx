import { createSlice } from '@reduxjs/toolkit'

const postSlice = createSlice({
  name: 'post',
  initialState: {
    filterText: '',
    postList: [],
    globalLoading: false,
  },
  reducers: {
    addPost: (state, action) => {
      state.postList.push(action.payload)
    },
    setPosts: (state, action) => {
      state.postList = action.payload
    },
    deleteFromPosts: (state, action) => {
      state.postList = state.postList.filter(
        (post) => post.id !== action.payload
      )
    },
    setFilterText: (state, action) => {
      state.filterText = action.payload
    },
    setGlobalLoading: (state, action) => {
      state.globalLoading = action.payload
    },
  },
})

export default postSlice.reducer

export const { addPost, setPosts, setFilterText, deleteFromPosts } =
  postSlice.actions

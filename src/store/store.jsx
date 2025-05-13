import { createSlice } from '@reduxjs/toolkit'

const postSlice = createSlice({
  name: 'post',
  initialState: {
    filterText: '',
    postList: [],
    originalPostList: [],
    globalLoading: false,
  },
  reducers: {
    addPost: (state, action) => {
      if (state.filterText.length > 0) {
        if (action.payload.name.toLowerCase().includes(state.filterText)) {
          state.postList.push(action.payload)
        }
      } else {
        state.postList.push(action.payload)
      }
      state.originalPostList.push(action.payload)
    },
    setPosts: (state, action) => {
      state.postList = action.payload
      state.originalPostList = action.payload
    },
    deleteFromPosts: (state, action) => {
      state.postList = state.originalPostList.filter(
        (post) => post.id !== action.payload
      )
      if (state.filterText) {
        state.filterText = ''
      }
    },
    setFilterText: (state, action) => {
      state.filterText = action.payload
      state.postList = state.originalPostList.filter((post) =>
        post.name.toLowerCase().includes(action.payload.toLowerCase())
      )
    },
    setGlobalLoading: (state, action) => {
      state.globalLoading = action.payload
    },
  },
})

export default postSlice.reducer

export const {
  addPost,
  setPosts,
  setFilterText,
  deleteFromPosts,
  setGlobalLoading,
} = postSlice.actions

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  filteredSubreddit: null,
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setFilteredSubreddit(state, action) {
      state.filteredSubreddit = action.payload;
    },
  },
});

export const { setPosts, setFilteredSubreddit } = postsSlice.actions;
export default postsSlice.reducer;

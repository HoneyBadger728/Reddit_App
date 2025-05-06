import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  filteredSubreddit: null,
  searchTerm: '',
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload.map((post) => {
        const data = post.data;
        return {
          id: data.id,
          title: data.title,
          author: data.author,
          subreddit: data.subreddit,
          score: data.score,
          num_comments: data.num_comments,
          url: data.url,
          image:
            data.post_hint === 'image' && data.preview?.images?.[0]
              ? data.preview.images[0].source.url.replace(/&amp;/g, '&')
              : null,
          comments: data.comments || [],
        };
      });
    },
    setFilteredSubreddit(state, action) {
      state.filteredSubreddit = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setPosts, setFilteredSubreddit, setSearchTerm } = postsSlice.actions;
export default postsSlice.reducer;

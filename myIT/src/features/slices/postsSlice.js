import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (searchTerm = ``, thunkAPI) => {
    const url = searchTerm
      ? `https://www.reddit.com/search.json?q=${searchTerm}&limit=20`
      : 'https://www.reddit.com/r/all/top.json?limit=20';

    const response = await fetch(url);
    const json = await response.json();
    
    const posts = json.data.children.map((post) => {
      const data = post.data;

      return {
        id: data.id,
        title: data.title,
        author: data.author,
        subreddit: data.subreddit,
        score: data.score,
        url: `https://www.reddit.com${data.permalink}`,
        num_comments: data.num_comments,
        image: data.preview?.images?.[0].source?.url?.replace(/&amp;/g, '&') || null,
        comments: [],
      };
    });

    return posts;
  }
);

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
    setFilteredSubreddit(state, action) {
      state.filteredSubreddit = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setFilteredSubreddit, setSearchTerm } = postsSlice.actions;
export default postsSlice.reducer;

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

export const fetchComments = createAsyncThunk(
  'posts/fetchComments',
  async (permalink, thunkAPI) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const json = await response.json();

    const comments = json[1].data.children
    .filter((item) => item.kind === 't1')
    .map((comment) => ({
      id: comment.data.id,
      author: comment.data.author,
      text: comment.data.body,
    }));

    return {
      permalink,
      comments,
    };
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
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const { permalink, comments } = action.payload;
      
        const post = state.posts.find((post) => `/r/${post.subreddit}/comments/${post.id}` === permalink);
        if (post) {
          post.comments = comments;
        }
      });
      
  },
});

export const { setFilteredSubreddit, setSearchTerm } = postsSlice.actions;
export default postsSlice.reducer;

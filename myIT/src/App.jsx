import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPosts } from './features/posts/postsSlice';
import mockPosts from './utilities/mockPosts';

import SearchBar from './components/searchBar/SearchBar';
import PostList from './components/postList/PostList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosts(mockPosts));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Welcome to my<span style={{color: 'red'}}>IT</span></h1>
      <SearchBar />
      <PostList />
    </div>
  );
}

export default App;

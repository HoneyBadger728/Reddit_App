import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPosts } from './features/slices/postsSlice';
import mockPosts from './utilities/mockPosts';

import SearchBar from './components/searchBar/SearchBar';
import SubFilter from './components/subFilter/SubFilter';
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
      <SubFilter />
      <PostList />
    </div>
  );
}

export default App;

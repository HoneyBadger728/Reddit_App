import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './features/slices/postsSlice';

import SearchBar from './components/searchBar/SearchBar';
import SubFilter from './components/subFilter/SubFilter';
import PostList from './components/postList/PostList';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
  return (
    <div className="App">
      <div className='header'>
        <h1>Welcome to my<span className='red-it'>IT</span></h1>
        <SearchBar />
      </div>
      <div className='content'>
        <SubFilter />
        <PostList />
      </div>
      
    </div>
  );
}

export default App;

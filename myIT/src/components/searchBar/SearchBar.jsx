import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setSearchTerm, fetchPosts } from '../../features/slices/postsSlice';
import './SearchBar.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(inputValue));
    dispatch(fetchPosts(inputValue));
  };

  const handleClear = () => {
    setInputValue('');
    dispatch(setSearchTerm(''));
    dispatch(fetchPosts(''));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Search Reddit posts..."
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default SearchBar;

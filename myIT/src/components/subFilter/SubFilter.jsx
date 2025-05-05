import { useSelector, useDispatch } from 'react-redux';
import { setFilteredSubreddit } from '../../features/slices/postsSlice';
import './SubFilter.css';

function SubFilter() {
  const dispatch = useDispatch();
  const { posts, filteredSubreddit, searchTerm } = useSelector((state) => state.posts);

  
  const visiblePosts = posts.filter((post) => {
    const matchesSearch = searchTerm
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesSearch;
  });

  
  const subreddits = [...new Set(visiblePosts.map((post) => post.subreddit))];

  const handleFilter = (subreddit) => {
    const newValue = subreddit === filteredSubreddit ? null : subreddit;
    dispatch(setFilteredSubreddit(newValue));
  };

  return (
    <div className="subreddit-filter">
      <h4>Filter by Subreddit</h4>
      <div className="subreddit-buttons">
        {subreddits.map((sub) => (
          <button
            key={sub}
            className={filteredSubreddit === sub ? 'active' : ''}
            onClick={() => handleFilter(sub)}
          >
            r/{sub}
          </button>
        ))}
        
      </div>
    </div>
  );
}

export default SubFilter;

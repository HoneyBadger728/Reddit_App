import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setFilteredSubreddit } from '../../features/slices/postsSlice';
import './SubFilter.css';

function SubFilter() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const subreddits = [...new Set(posts.map((post) => post.subreddit))];

  const handleFilter = (subreddit) => {
    const newValue = subreddit === selected ? null : subreddit;
    setSelected(newValue);
    dispatch(setFilteredSubreddit(newValue));
  };

  return (
    <div className="subreddit-filter">
      <h4>Filter by Subreddit</h4>
      <div className="subreddit-buttons">
        {subreddits.map((sub) => (
          <button
            key={sub}
            className={selected === sub ? 'active' : ''}
            onClick={() => handleFilter(sub)}
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SubFilter;

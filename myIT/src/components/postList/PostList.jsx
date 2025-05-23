import { useSelector } from 'react-redux';
import PostItem from '../postItem/PostItem'; 
import './PostList.css';

function PostList() {
  const { posts, filteredSubreddit, searchTerm } = useSelector((state) => state.posts);

    const filteredPosts = posts.filter((post) => {
      const matchesSubreddit = filteredSubreddit ? post.subreddit === filteredSubreddit : true;
      const matchesSearch = searchTerm
        ? post.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesSubreddit && matchesSearch;
    });
  

  const showNoResults = searchTerm && filteredPosts.length === 0;

  return (
    <div className="post-list">
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        showNoResults && <p className="no-results">No matching posts found . . .</p>
      )}
    </div>
  );
}

export default PostList;

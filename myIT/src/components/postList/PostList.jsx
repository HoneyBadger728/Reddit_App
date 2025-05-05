import { useSelector } from 'react-redux';
import PostItem from '../postItem/PostItem'; 
import './PostList.css';

function PostList() {
  const posts = useSelector((state) => {
    const { posts, filteredSubreddit, searchTerm } = state.posts;

    return posts.filter((post) => {
      const matchesSubreddit = filteredSubreddit ? post.subreddit === filteredSubreddit : true;
      const matchesSearch = searchTerm
        ? post.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesSubreddit && matchesSearch;
    });
  });

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <p className="no-results">No matching posts found . . .</p>
      )}
    </div>
  );
}

export default PostList;

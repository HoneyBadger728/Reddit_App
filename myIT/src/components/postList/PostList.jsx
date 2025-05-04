import { useSelector } from 'react-redux';
import PostItem from '../postItem/PostItem'; 
import './PostList.css';

function PostList() {
  const posts = useSelector((state) => {
    const { posts, filteredSubreddit } = state.posts;
    return filteredSubreddit
      ? posts.filter((post) => post.subreddit === filteredSubreddit)
      : posts;
  });
  

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;

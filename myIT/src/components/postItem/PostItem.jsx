import './PostItem.css';

function PostItem({ post }) {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      {post.image && <img src={post.image} alt={post.title} className="post-image" />}
      <p>
        <strong>Author:</strong> {post.author} | <strong>Subreddit:</strong> {post.subreddit}
      </p>
      <p>
        👍 {post.score} | 💬 {post.num_comments}
      </p>
      <a href={post.url} target="_blank" rel="noopener noreferrer">View on Reddit</a>
    </div>
  );
}

export default PostItem;

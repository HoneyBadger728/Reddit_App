import { useState } from 'react';
import './PostItem.css';

function PostItem({ post }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      {post.image && <img src={post.image} alt={post.title} className="post-image" />}
      <div className="post-details">
        <p><strong>Author:</strong> {post.author}</p>
        <p><strong>Subreddit:</strong> {post.subreddit}</p>
        <p><strong>Score:</strong> {post.score}</p>
        <button onClick={() => setShowComments(!showComments)}>💬 {post.num_comments}</button>
      </div>
      {showComments && (
        <div className="comments-section">
          {post.comments?.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment.id} className="comment">
                <strong>{comment.author}:</strong> {comment.text}
              </div>
            ))
          ) : (
            <p>No comments available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PostItem;

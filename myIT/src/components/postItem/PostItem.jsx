import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../features/slices/postsSlice';
import './PostItem.css';

function PostItem({ post }) {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();

  const handleToggleComments = () => {
    setShowComments(!showComments);

    if (!post.comments || post.comments.length === 0) {
      dispatch(fetchComments(`/r/${post.subreddit}/comments/${post.id}`))
    }
  }

  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      {post.image && <img src={post.image} alt={post.title} className="post-image" />}
      <div className="post-details">
        <p><strong>Author:</strong> {post.author}</p>
        <p>
          <strong>Subreddit:</strong> 
          <a 
            href={`https://www.reddit.com/r/${post.subreddit}`}  
            target='_blank'
            rel='noopener noreferrer'
          >
            r/{post.subreddit}
          </a>
        </p>
        <p><strong>Score:</strong> {post.score}</p>
        <button onClick={handleToggleComments} className={showComments ? 'active' : ''}>
          💬 {post.num_comments}
        </button>
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

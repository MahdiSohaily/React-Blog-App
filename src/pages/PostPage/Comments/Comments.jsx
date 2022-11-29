import { useState, useEffect } from 'react';
import loadComments from './loadComments';
import './style.css';

export default function Comments({ id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadComments(id).then(({ data }) => {
      setComments(data);
    });
  }, [id]);
  const data = comments ? (
    comments.map((comment) => <li key={comment.id}>{comment.summary}</li>)
  ) : (
    <li>There is no comments for this post</li>
  );

  return (
    <div className="comments-container">
      <h2>Comments:</h2>
      <ul>{data}</ul>
    </div>
  );
}

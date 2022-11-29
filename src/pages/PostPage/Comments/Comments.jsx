import { useState, useEffect } from 'react';
import loadComments from './loadComments';

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
    <li>Nothing to show</li>
  );

  return <div>{data}</div>;
}

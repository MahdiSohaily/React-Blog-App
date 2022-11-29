import { useState, useEffect } from 'react';
import loadComments from './loadComments';

export default function Comments({ id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadComments().then((response) => {
      setComments(response.data);
    });
  }, [id]);
  return <div>{comments}</div>;
}

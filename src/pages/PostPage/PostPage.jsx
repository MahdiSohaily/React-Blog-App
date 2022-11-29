import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Comments from './Comments/Comments';
import loadPost from './loadPost';

export default function PostPage({ id }) {
  const [post, setPost] = useState('');

  useEffect(() => {
    loadPost(id).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.summary}</p>
      {post && <Comments id={post.id} />}
    </Layout>
  );
}

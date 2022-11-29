import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Comments from './Comments/Comments';
import loadPost from './loadPost';
import './style.css';

export default function PostPage({ id }) {
  const [post, setPost] = useState('');

  useEffect(() => {
    loadPost(id).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  return (
    <Layout>
      {post ? (
        <div className="container">
          <img className="responsive-img" src={post.image} alt={post.title} />
          <h1 className="text-center">{post.title}</h1>
          <p>{post.summary}</p>
          {post && <Comments id={post.id} />}
        </div>
      ) : (
        <div className="loader">
          <img src="assets/spinner.gif" alt="loader icon" />
        </div>
      )}
    </Layout>
  );
}

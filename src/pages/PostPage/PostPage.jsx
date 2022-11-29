import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import loadPost from './losdPost';

export default function PostPage({ id }) {
  const [post, setPost] = useState('');

  useEffect(() => {
    loadPost(id).then((response) => {
      console.log(response.data);
    });
  }, [id]);
  return <Layout>PostPage</Layout>;
}

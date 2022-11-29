import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import PostPage from '../pages/PostPage';

const routes = {
  '/': () => <HomePage />,
  '/blog': () => <BlogPage />,
  '/post/:id': ({ id }) => <PostPage id={id} />,
};

export default routes;

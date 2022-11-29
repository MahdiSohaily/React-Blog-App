import { useRoutes } from 'hookrouter';
import routes from './routes/route';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
}

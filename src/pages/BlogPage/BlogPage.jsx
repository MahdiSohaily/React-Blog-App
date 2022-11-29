import { useState, useEffect } from 'react';
import https from '../../services/htpp';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import './style.css';

export default function BlogPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    https.get('/posts').then((response) => {
      setCards(response.data);
    });
  }, []);

  const data =
    cards.length > 0 ? (
      cards.map((card) => <Card key={card.id} post={card} />)
    ) : (
      <div className="loader">
        <img src="assets/spinner.gif" alt="loader icon" />
      </div>
    );

  return (
    <Layout>
      <header>
        <h1>Cool Articles</h1>
      </header>
      <div className="band">{data}</div>
    </Layout>
  );
}

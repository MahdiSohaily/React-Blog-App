import './style.css';

export default function Card({ post }) {
  return (
    <div className={`item-${post.id}`}>
      <a href={`post/${post.id}`} className="card">
        <div
          className="thumb"
          style={{
            backgroundImage: `url(${post.image})`,
          }}
        ></div>
        <article>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
          <span>{post.author}</span>
        </article>
      </a>
    </div>
  );
}

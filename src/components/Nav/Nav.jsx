import { A } from 'hookrouter';
import './style.css';

export default function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <A href="/">Home</A>
        </li>
        <li>
          <A href="/blog">Blog</A>
        </li>
        <li>
          <A href="/contact">Contact Us</A>
        </li>
        <li>
          <A href="/about">About Us</A>
        </li>
      </ul>
    </nav>
  );
}

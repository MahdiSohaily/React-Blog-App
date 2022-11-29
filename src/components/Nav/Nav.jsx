import { A } from 'hookrouter';
import './style.css';

export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <A href="/">Home Page</A>
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
    </header>
  );
}

import { A } from 'hookrouter';
import './style.css';

export default function Nav() {
  return (
    <nav>
      <img src={`${process.env.PUBLIC_URL}logo.png`} alt="logo" />
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

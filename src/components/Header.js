import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Magic Magicians</h1>
      <nav>
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/calculator" className="link">Calculator</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

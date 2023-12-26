// Import React
import React from "react";

// Import styles from the CSS module
import styles from "./Header.module.css";

// Define the functional component
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Your Website Name</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Export the component
export default Header;

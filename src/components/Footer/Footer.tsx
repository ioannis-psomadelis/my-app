// Import React
import React from "react";

// Import styles from the CSS module
import styles from "./Footer.module.css";

// Define the functional component
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
};

// Export the component
export default Footer;

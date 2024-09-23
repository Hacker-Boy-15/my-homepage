// src/HomePage.js

import React from 'react';
import './HomePage.css'; // We'll add some basic styling

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to My Homepage</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main className="content">
        <section id="about">
          <h2>About Us</h2>
          <p>We are a company that values excellence and innovation.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <p>We offer a wide range of services to meet your needs.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>You can reach us at contact@example.com.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Company</p>
      </footer>
    </div>
  );
};

export default HomePage;

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="nav">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </nav>
      <p>
        Contact Us: <a href="tel:+19188041026">(918) 804-1026</a> |
        <a href="mailto:castaneda6473@gmail.com">castaneda6473@gmail.com</a>
      </p>
    </section>
  );
}

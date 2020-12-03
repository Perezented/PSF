import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section id="footer" className="footer">
      <div>
        <nav>
          <ul>
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
            <li>
              <Link to="/joinUs">Join Our Team</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p>Copyright © 2020 All rights reserved</p>
    </section>
  );
}

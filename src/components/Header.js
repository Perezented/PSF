import React from "react";

export default function Header() {
  return (
    <section className="nav">
      <nav>
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <p>
        Contact Us: <a href="tel:+19188041026">(918) 804-1026</a> |
        <a href="mailto:castaneda6473@gmail.com">castaneda6473@gmail.com</a>
      </p>
    </section>
  );
}

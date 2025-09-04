import React from "react";
import ActualNav from "../sub/ActualNav";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="footer" className="footer">
      <div>
        <ActualNav footer={true} />
        <p>Copyright © 2020-{currentYear} All rights reserved</p>
      </div>
    </section>
  );
}

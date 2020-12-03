import React from "react";
import ActualNav from "../sub/ActualNav";

export default function Footer() {
  return (
    <section id="footer" className="footer">
      <div>
        <ActualNav footer={true} />
        <p>Copyright © 2020 All rights reserved</p>
      </div>
    </section>
  );
}

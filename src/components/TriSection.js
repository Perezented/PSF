import React from "react";
export default function TriSection() {
  return (
    <section className="homeTriDesc">
      <h2>Commercial Work</h2>

      <div className="triSection">
        <div className="hospitals">
          <i className="fas fa-hospital-user  fa-4x" />
          <h4>Hospitals</h4>
          <p>
            Our team is accepted by multiple hospitals ranging from Utah to
            Arkansas. Seeing a hospital environment has a requirement to be
            clean and have fresh air, we ensure to keep dust and contaminats
            down. We have focused most of our operations in Tulsa, OK and
            Oklahoma City. Nearly all major hospitals in these areas hire
            Pro-Select for the flooring you will see at these hospitals.{" "}
          </p>
        </div>
        <div className="school">
          <i className="fas fa-school  fa-4x" />
          <h4>Schools</h4>
        </div>
        <div className="new">
          <i className="fas fa-city  fa-4x" />
          <h4>All Floor Types</h4>
        </div>
      </div>
    </section>
  );
}

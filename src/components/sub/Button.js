import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="/contact">
      <button id="button" className="button">
        Contact Us
      </button>
    </Link>
  );
}

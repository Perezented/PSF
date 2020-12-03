import { Link } from "react-router-dom";

export default function ActualNav(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        {/* <li> <Link to="/about">About Us</Link> </li> */}
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        {props.footer !== undefined && (
          <li>
            <Link to="/joinUs">Join Our Team</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

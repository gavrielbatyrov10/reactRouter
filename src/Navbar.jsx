import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/Red">red</NavLink>
      <NavLink to="/Blue">blue</NavLink>
    </nav>
  );
}

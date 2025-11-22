import ThemeToggle from "./ThemeToggle";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav id="Navbar">
        <div id="nav-content">
            <span className="logo">Tampa Tours</span>
            <ThemeToggle />
        </div>
    </nav>
  );
}

import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-500 transition">
            Projects
          </Link>
          <Link to="/photography" className="hover:text-blue-500 transition">
            Photography
          </Link>
          <Link to="/lab" className="hover:text-blue-500 transition">
            Lab
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
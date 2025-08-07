import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border border-white/20 bg-black/40 p-4 rounded-2xl h-full w-full">
      <div className="flex items-center justify-between">
        <h1>NotesApp</h1>
        <ul className="flex items-center gap-6">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/create"}>Create Note</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

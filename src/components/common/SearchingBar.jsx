import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./SearchingBar.css";

function SearchingBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="searching-bar">
        <h2>Recipery</h2>
        <input type="text" placeholder="Search recipes" />
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={20}
          color="#fcce02"
        />
      </div>

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <nav className="menu-nav">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Register User
          </Link>
          <Link to="/add-recipe" onClick={() => setIsOpen(false)}>
            Add Recipe
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div className="menu-overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default SearchingBar;

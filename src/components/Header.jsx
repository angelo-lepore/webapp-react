// Import NavLink e Link
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-4">
        {/* Brand/logo */}
        <Link className="navbar-brand" to="/">
          <i className="bi bi-film me-2"></i> CineVerse
        </Link>

        {/* Bottone per mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Link di navigazione */}
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-house-door-fill"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-collection-play-fill"></i> Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-info-circle-fill"></i> About
              </NavLink>
            </li>
          </ul>

          {/* Barra di ricerca */}
          <form className="d-flex">
            <div className="input-group">
              <input
                type="text"
                className="form-control input-focus-cineverse"
                placeholder="Search movie..."
              />
              <button className="btn btn-outline-light" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
}

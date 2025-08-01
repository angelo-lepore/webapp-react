// Import Link
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="bg-secondary text-light py-5 mt-auto">
        {/* Contenuto */}
        <div className="container text-center">
          <h5 className="mb-3 fw-semibold text-uppercase ">CineVerse</h5>
          <p className="mb-2 small">
            &copy; 2025 CineVerse. Tutti i diritti riservati.
          </p>
          <p className="mb-4 small ">
            Made with <i className="bi bi-heart-fill text-danger"></i> by Classe
            #146
          </p>

          {/* Icone Social */}
          <div className="d-flex justify-content-center gap-3">
            <Link to="#" className="text-light fs-5">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="#" className="text-light fs-5">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="#" className="text-light fs-5">
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link to="#" className="text-light fs-5">
              <i className="bi bi-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Import Link
import { Link } from "react-router-dom";

// Componente che mostra una singola "card" movie
export default function SingleMovieCard({ movie }) {
  return (
    <>
      <div className="card border border-dark shadow bg-white text-dark">
        <div className="row g-0">
          {/* Immagine */}
          <div className="col-md-6 d-flex align-items-center justify-content-center p-4">
            <img
              src={movie?.image}
              alt={movie?.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>

          {/* Contenuto */}
          <div className="col-md-6 p-5 d-flex flex-column justify-content-between">
            <div>
              <h2 className="fw-bold mb-3">{movie?.title}</h2>
              <p className="text-muted mb-2">
                <strong>Regista:</strong> {movie?.director}
              </p>
              <p className="text-muted mb-2 text-capitalize">
                <strong>Genere:</strong> {movie?.genre}
              </p>
              <p className="text-muted mb-4">
                <strong>Anno:</strong> {movie?.release_year}
              </p>
              <p className="mb-4">{movie?.abstract}</p>
            </div>

            <div className="d-flex justify-content-end mt-auto">
              <Link to="/movies" className="btn btn-outline-dark btn-lg">
                <i className="bi bi-arrow-left me-2"></i> Torna ai film
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

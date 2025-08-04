// Import Link
import { Link } from "react-router-dom";

// Componente che mostra una singola "card" movie
export default function MovieCard({ movie }) {
  return (
    <>
      <div className="card h-100 border border-dark bg-white text-dark shadow">
        <Link to={`/movies/${movie?.id}`}>
          <img
            src={movie?.image}
            className="card-img-top p-3"
            alt={movie?.title}
            style={{
              objectFit: "contain",
              height: "300px",
              width: "100%",
            }}
          />
        </Link>
        <div className="card-body text-center">
          <Link
            to={`/movies/${movie?.id}`}
            className="text-decoration-none text-dark"
          >
            <h6 className="card-title fw-semibold">{movie?.title}</h6>
          </Link>
        </div>
      </div>
    </>
  );
}

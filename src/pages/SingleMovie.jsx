// Import degli hook di React
import { useState, useEffect } from "react";

// Import gli hook del router
import { useParams } from "react-router-dom";

// Import Link
import { Link } from "react-router-dom";

export default function SingleMovie() {
  const { id } = useParams();
  const urlMovies = `http://localhost:3020/movies/${id}`;
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(urlMovies)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log("Film:", data);
        setReviews(data.reviews);
        console.log("Recensioni:", data.reviews);
      });
  }, [id]);

  return (
    <>
      <main>
        <div className="container py-5">
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
          {/* Sezione recensioni */}
          <section className="mt-5">
            <h3>Recensioni</h3>
            {reviews?.length === 0 ? (
              <p>Ancora nessuna recensione per questo film.</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="border rounded p-3 mb-3">
                  <p>
                    <strong>{review.name}</strong> - Vote: {review.vote}/5
                  </p>
                  <p>{review.text}</p>
                </div>
              ))
            )}
          </section>
        </div>
      </main>
    </>
  );
}

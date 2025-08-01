// Import degli hook di React
import { useState, useEffect } from "react";

// Import Link
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const urlMovies = "http://localhost:3020/movies";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(urlMovies)
      .then((res) => res.json())
      .then((data) => {
        console.log("Movies:", data);
        setMovies(data);
      });
  }, []);

  return (
    <>
      <main>
        <div className="container py-5">
          <h1 className="display-4 text-center mb-5">
            I Nostri Film Recensiti
          </h1>

          <div className="row">
            {movies.map(({ id, title, image }) => (
              <div key={id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100 border border-dark bg-white text-dark shadow">
                  <Link to={`/movies/${id}`}>
                    <img
                      src={image}
                      className="card-img-top p-3"
                      alt={title}
                      style={{
                        objectFit: "contain",
                        height: "300px",
                        width: "100%",
                      }}
                    />
                  </Link>
                  <div className="card-body text-center">
                    <Link
                      to={`/movies/${id}`}
                      className="text-decoration-none text-dark"
                    >
                      <h6 className="card-title fw-semibold">{title}</h6>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

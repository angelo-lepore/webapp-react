// Import degli hook di React
import { useState, useEffect } from "react";

// Import di MovieCard
import MovieCard from "./MovieCard";

// Componente che mostra la lista dei film
export default function MovieList() {
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
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}

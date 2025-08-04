<<<<<<< HEAD
// Import degli hook di React
import { useState, useEffect } from "react";

// Import di MovieCard
import MovieCard from "./MovieCard";

// Componente che mostra la lista dei film
export default function MovieList() {
  const urlMovies = "http://localhost:3020/movies";
  const [movies, setMovies] = useState([]);
=======
// Import di MovieCard
import MovieCard from "./MovieCard";

// Importi dell'hook per accedere ai film dal context
import { useMovieProvider } from "../contexts/MovieContext";
>>>>>>> 49ee702 (Added movie provider and integrate context into MovieList and App components)

// Componente che mostra la lista di tutti i film
export default function MovieList() {
  const { movies } = useMovieProvider();

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

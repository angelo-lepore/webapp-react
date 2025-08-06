// Import di MovieCard
import MovieCard from "../components/MovieCard";

// Importi dell'hook per accedere ai film dal context
import { useMovieContext } from "../contexts/MovieContext";

// Componente che mostra la lista di tutti i film
export default function MovieList() {
  // Usiamo il nostro custom hook per ottenere i film dal context
  const { movies } = useMovieContext();

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
